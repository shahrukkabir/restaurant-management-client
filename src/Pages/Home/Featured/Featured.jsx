import React from 'react';
import img from '../../../assets/home/featured.jpg'

const featured = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center" style={{ backgroundImage: `url(${img})`, }}>
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-12 text-white">
                <div className="md:w-1/2 w-full mb-8 md:mb-0">
                    <img src={img} alt="Delicious food"className="w-full max-w-md mx-auto shadow-lg"/>
                </div>

                <div className="md:w-1/2 w-full text-center md:text-left px-4">
                    <p className="text-sm text-gray-300 mb-2">March 20, 2023</p>
                    <h3 className="text-2xl font-semibold mb-4">WHERE CAN I GET SOME?</h3>
                    <p className="text-gray-300 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                    </p>
                    <button className="text-base mt-8 font-semibold text-white relative px-6 pb-2 border-b-4 border-b-gray-400 rounded-b-3xl">
                        READ MORE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default featured;