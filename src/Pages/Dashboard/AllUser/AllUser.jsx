import React from 'react';
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure, { axiosSecure } from '../../../hooks/useAxiosSecure';

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDelete = (id) => {
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
                    axios.delete(`http://localhost:5000/users/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                Swal.fire("Deleted!", "User has been deleted.", "success");
                                refetch(); // 👈 after delete, reload users
                            }
                        });
                }
            });
    };

    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User promoted to Admin!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch(); // 👈 Refresh the users list
                }
            })
            .catch(error => {
                console.error('Error making admin:', error);
            });
    };


    return (
        <div className="p-4 min-h-screen text-base-content">
            <div className="text-center -mt-16">
                <SectionTitle subHeading={"---How many??---"} heading={"MANAGE ALL USERS"} />
            </div>

            <div className="bg-base-100 rounded-xl shadow-2xl p-8 max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Total users: {users.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-[#D1A054] text-white text-center">
                                <th className="rounded-tl-xl">#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th className="rounded-tr-xl">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id} className="hover:bg-gray-800 transition duration-200 text-center">
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'Admin' : (
                                            <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-warning btn-sm text-white"><FaUserShield /></button>
                                        )}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-error btn-sm text-white" > <FaTrashAlt /></button>
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

export default AllUser;
