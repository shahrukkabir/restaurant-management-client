import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();

    const [menu, , refetch] = useMenu();

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6c757d",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/menu/${item._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                Swal.fire("Deleted!", "User has been deleted.", "success");
                                refetch();
                            }
                        });
                }
            });
    };

    return (
        <div className="p-4 min-h-screen text-base-content">
            <div className="text-center -mt-16">
                <SectionTitle subHeading={"---Hurry Up!---"} heading={"MANAGE ALL ITEMS"} />
            </div>

            <div className="bg-base-200 rounded-xl shadow-2xl p-8 max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Total Items: {menu.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-center">
                                <th className="rounded-tl-xl">#</th> {/* Serial number column */}
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th className="rounded-tr-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, index) => (
                                <tr key={item._id} className="hover:bg-gray-800 transition duration-200 text-center">
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center justify-center">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn bg-[#D1A054] btn-sm text-white">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn bg-red-600 btn-sm text-white">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
