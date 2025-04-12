import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-600 pl-40 py-12">
                        <h2 className="text-2xl font-semibold mb-4 text-center">CONTACT US</h2>
                        <ul className="space-y-2 text-sm">
                            <li className='text-center'>123 ABS Street, Uni 21, Bangladesh</li>
                            <li className='text-center'>Phone: +88 123456789</li>
                            <li className='text-center'>Mon - Fri: 08:00 - 22:00</li>
                            <li className='text-center'>Sat - Sun: 10:00 - 23:00</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 pl-40 py-12">
                        <h2 className="text-2xl font-semibold mb-4">Follow US</h2>
                        <p className="mb-4 text-sm">Join us on social media</p>
                        <div className="flex space-x-4 text-2xl">
                            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors duration-300">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-black text-center py-4 text-sm">
                    © {new Date().getFullYear()} CulinaryCloud. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
