import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const UpdateItem = () => {
    const { id } = useParams();
    const { name, category, price, recipe, image } = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedName = form.name.value;
        const updatedCategory = form.category.value;
        const updatedPrice = parseFloat(form.price.value);
        const updatedRecipe = form.recipe.value;
        const imageFile = form.image.files[0];

        let imageURL = image;

        if (imageFile) {
            const formData = new FormData();
            formData.append('image', imageFile);

            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            if (res.data.success) {
                imageURL = res.data.data.url;
            } else {
                toast.error("Image upload failed!");
                return;
            }
        }
        const updatedItem = {
            name: updatedName,
            category: updatedCategory,
            price: updatedPrice,
            recipe: updatedRecipe,
            image: imageURL
        };

        const result = await axiosSecure.patch(`/menu/${id}`, updatedItem);

        if (result.data.modifiedCount > 0) {
            toast.success("Item updated successfully!");
            navigate("/dashboard/manageItems");
        } else {
            toast.error("Failed to update item!");
        }
    };

    return (
        <div className="p-4 min-h-screen text-base-content">
            <div className="text-center -mt-16">
                <SectionTitle subHeading={"---Update Existing---"} heading={"UPDATE ITEM"} />
            </div>

            <div className="bg-base-200 rounded-xl shadow-2xl p-8 max-w-5xl mx-auto">
                <form onSubmit={handleUpdate} className="space-y-8">
                    <div>
                        <label className="block mb-2 font-semibold">Recipe Name*</label>
                        <input name="name" type="text" defaultValue={name} className="input input-bordered w-full bg-base-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block mb-2 font-semibold">Category*</label>
                            <select name="category" className="select select-bordered w-full bg-base-200" defaultValue={category}>
                                <option disabled value="">Select Category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Price*</label>
                            <input name="price" type="number" defaultValue={price} className="input input-bordered w-full bg-base-200" />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">Recipe Details*</label>
                        <textarea name="recipe" defaultValue={recipe} className="textarea textarea-bordered w-full bg-base-200" rows="5"></textarea>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Current Image</label>
                        <img src={image} alt="Current Recipe" className="w-40 h-40 object-cover rounded-lg mb-4" />

                        <label className="block mb-2 font-semibold">Upload New Image (optional)</label>
                        <input name="image" type="file" className="file-input file-input-bordered w-full bg-base-200" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-10">
                            Update Recipe Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
