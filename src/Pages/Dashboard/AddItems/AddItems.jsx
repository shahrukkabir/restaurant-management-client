import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AddItems = () => {

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('input[type="text"]').value;
        const category = form.querySelector('select').value;
        const price = form.querySelector('input[type="number"]').value;
        const recipe = form.querySelector('textarea').value;
        const imageFile = form.querySelector('input[type="file"]').files[0];

        const formData = new FormData();
        formData.append('image', imageFile);

        const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        const imageURL = res.data.data.url;

        if (res.data.success) {
            const newItem = {
                name,
                category,
                price: parseFloat(price),
                recipe,
                image: imageURL
            };

            const menuRes = await axiosSecure.post('/menu', newItem);

            if (menuRes.data.insertedId) {
                toast.success('Item Added Successfully!');
                form.reset();
            }
            else {
                toast.error('Failed to add item to menu!');
            }
        }
        else {
            toast.error('Image upload failed!');
        }
    };


    return (
        <div className="p-4 min-h-screen text-base-content">
            <div className="text-center -mt-16">
                <SectionTitle subHeading={"---What's New?---"} heading={"ADD AN ITEM"} />
            </div>

            <div className="bg-base-200 rounded-xl shadow-2xl p-8 max-w-5xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-semibold">Recipe Name*</label>
                        <input type="text" placeholder="Recipe Name" className="input input-bordered w-full bg-base-200" />
                    </div>
                    {/* Recipe Price and Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block mb-2 font-semibold">Category*</label>
                            <select className="select select-bordered w-full bg-base-200" defaultValue="">
                                <option disabled value="">Select Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>
                            </select>

                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Price*</label>
                            <input type="number" placeholder="Price" className="input input-bordered w-full bg-base-200" />
                        </div>
                    </div>
                    {/* Recipe Details */}
                    <div>
                        <label className="block mb-2 font-semibold">Recipe Details*</label>
                        <textarea placeholder="Recipe Details" className="textarea textarea-bordered w-full bg-base-200" rows="5" ></textarea>
                    </div>
                    {/* Upload Image */}
                    <div>
                        <label className="block mb-2 font-semibold">Upload Image*</label>
                        <input type="file" className="file-input file-input-bordered w-full bg-base-200" />
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-10">
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
