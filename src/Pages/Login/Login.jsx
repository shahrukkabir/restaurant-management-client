import React, { useContext, useEffect, useState } from 'react';
import bgimg from '../../assets/others/authentication.png';
import img from '../../assets/others/authentication1.png';
import { FaGithub, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleCaptchaChange = (e) => {
        setCaptchaInput(e.target.value);
        setCaptchaError('');
        setIsCaptchaVerified(false);
    };

    const { signInUser } = useContext(AuthContext);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Google Sign-In Successful:", result.user);
                navigate(from);
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
            });
    };

    const handleLogin = e => {
        e.preventDefault();

        if (!validateCaptcha(captchaInput)) {
            setCaptchaError('Captcha does not match');
            setIsCaptchaVerified(false);
            return;
        }

        setIsCaptchaVerified(true);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log('Sign In', result)

            })
            .catch(error => {
                console.log(error);

            })

        console.log("Email:", email, "Password:", password);

    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
            style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="rounded-2xl flex w-full max-w-5xl p-6 bg-opacity-90" style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>

                {/* Left Image */}
                <div className="w-1/2 hidden md:flex items-center justify-center rounded-l-2xl">
                    <img src={img} className="object-contain w-4/5 h-auto" />
                </div>

                {/* Right Form */}
                <div className="w-full md:w-1/2 px-4 py-2">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block mb-1 text-base font-medium text-gray-700">Email</label>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full h-12 text-base bg-white text-gray-800" required />
                        </div>
                        <div>
                            <label className="block mb-1 text-base font-medium text-gray-700">Password</label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full h-12 text-base bg-white text-gray-800" required />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm italic text-gray-700"><LoadCanvasTemplate /></label>
                            <input
                                type="text"
                                name="captcha"
                                placeholder="Enter captcha"
                                className="input input-bordered w-full h-12 text-base mt-1 bg-white text-gray-800"
                                value={captchaInput}
                                onChange={handleCaptchaChange}
                                required
                            />
                            {captchaError && <p className="text-red-600 text-sm mt-1">{captchaError}</p>}
                        </div>
                        <button type="submit" className="btn w-full h-12 text-base text-white border-none shadow-md"
                            style={{ backgroundColor: 'rgba(209, 160, 84, 0.8)' }}>
                            Sign In
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            New here? <a href="/signup" className="text-yellow-700 font-semibold hover:underline">Create Account</a>
                        </p>

                        <p className="mt-4 text-sm text-gray-600">Or sign in with</p>

                        <div className="flex justify-center gap-4 mt-2">
                            <button onClick={handleGoogleSignIn} className="btn btn-circle bg-white shadow text-gray-700 text-xl">
                                <FaFacebookF />
                            </button>
                            <button className="btn btn-circle bg-white shadow text-gray-700 text-xl">
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

export default Login;
