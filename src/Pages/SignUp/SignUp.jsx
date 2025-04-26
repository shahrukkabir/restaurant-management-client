import React, { useContext, useState } from 'react';
import bgimg from '../../assets/others/authentication.png';
import img from '../../assets/others/authentication1.png';
import { FaGithub, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser, signUpWithGoogle, updateUserProfile, setUser } = useContext(AuthContext);

    const handleGoogleSignUp = () => {
        signUpWithGoogle()
            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                const user = result.user;
                setUser(user);
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        toast.success("Successfully Registered!");
                        navigate("/", { replace: true });
                    })
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!passwordRegex.test(password)) {
            Swal.fire('Error', 'Password must be at least 6 characters long, contain at least one uppercase letter, and one number.', 'error');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile(name, photo)
                    .then(() => {
                        const userInfo = {
                            name,
                            email
                        };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success("Successfully Registered!");
                                    form.reset();
                                    navigate("/", { replace: true });
                                }
                            })

                    })
                    .catch((error) => {
                        toast.error("Profile Update Failed: " + error.message);
                    });
            })
            .catch((error) => {
                toast.error("Registration Failed: " + error.message);
            });
    };

    return (
        <>
            <Helmet>
                <title>Restaurant | SignUp</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
                style={{ backgroundImage: `url(${bgimg})` }}>
                <div className="rounded-2xl flex flex-row-reverse w-full max-w-5xl p-6 bg-opacity-90"
                    style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>

                    {/* Right Image */}
                    <div className="w-1/2 hidden md:flex items-center justify-center rounded-r-2xl">
                        <img src={img} className="object-contain w-4/5 h-auto" />
                    </div>

                    {/* Left Form */}
                    <div className="w-full md:w-1/2 px-4 py-2">
                        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

                        <form onSubmit={handleSignUp} className="space-y-4">
                            <div>
                                <label className="block mb-1 text-base font-medium text-gray-700">Name</label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full h-12 text-base bg-white text-gray-800" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-base font-medium text-gray-700">Photo URL</label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full h-12 text-base bg-white text-gray-800" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-base font-medium text-gray-700">Email</label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full h-12 text-base bg-white text-gray-800" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-base font-medium text-gray-700">Password</label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full h-12 text-base bg-white text-gray-800" required />
                            </div>
                            <button type="submit" className="btn w-full h-12 text-base text-white border-none shadow-md" style={{ backgroundColor: 'rgba(209, 160, 84, 0.8)' }}>Sign Up</button>
                        </form>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Already registered? <a href="/login" className="text-yellow-700 font-semibold hover:underline">Go to log in</a>
                            </p>
                            <p className="mt-4 text-sm text-gray-600">Or sign up with</p>
                            <div className="flex justify-center gap-4 mt-2">
                                <button className="btn btn-circle bg-white shadow text-gray-700 text-xl"> <FaFacebookF /> </button>
                                <button onClick={handleGoogleSignUp} className="btn btn-circle bg-white shadow text-gray-700 text-xl"> <FaGoogle /> </button>
                                <button className="btn btn-circle bg-white shadow text-gray-700 text-xl"> <FaGithub /> </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
