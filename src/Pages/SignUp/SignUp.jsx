import React, { useContext, useState } from 'react';
import bgimg from '../../assets/others/authentication.png';
import img from '../../assets/others/authentication1.png';
import { FaGithub, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const { createUser, signUpWithGoogle } = useContext(AuthContext);

    const handleGoogleSignUp = () => {
        signUpWithGoogle()
            .then((result) => {
                console.log("Google Sign-Up Successful:", result.user);
            })
            .catch((error) => {
                console.error("Google Sign-Up Error:", error);
            });
    };

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log('User Created', result.user);
            })
            .catch(error => {
                console.log(error);
            });

        const formData = { name, email, password };
        console.log("Form submitted:", formData);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
            style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="rounded-2xl flex flex-row-reverse w-full max-w-5xl p-6 bg-opacity-90" style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>

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
                            <label className="block mb-1 text-base font-medium text-gray-700">Email</label>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full h-12 text-base bg-white text-gray-800" required />
                        </div>
                        <div>
                            <label className="block mb-1 text-base font-medium text-gray-700">Password</label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full h-12 text-base bg-white text-gray-800" required />
                        </div>
                        <button type="submit" className="btn w-full h-12 text-base text-white border-none shadow-md"
                            style={{ backgroundColor: 'rgba(209, 160, 84, 0.8)' }}>
                            Sign Up
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Already registered? <a href="/login" className="text-yellow-700 font-semibold hover:underline">Go to log in</a>
                        </p>

                        <p className="mt-4 text-sm text-gray-600">Or sign up with</p>

                        <div className="flex justify-center gap-4 mt-2">
                            <button className="btn btn-circle bg-white shadow text-gray-700 text-xl">
                                <FaFacebookF />
                            </button>
                            <button onClick={handleGoogleSignUp} className="btn btn-circle bg-white shadow text-gray-700 text-xl">
                                <FaGoogle />
                            </button>
                            <button className="btn btn-circle bg-white shadow text-gray-700 text-xl">
                                <FaGithub />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
