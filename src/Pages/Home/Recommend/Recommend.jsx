import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'; 
import img from '../../../assets/home/slide1.jpg';

const SaladCard = () => {
    return (
        <div className="max-w-xs mx-auto rounded overflow-hidden shadow-md border bg-white">
            <div className="relative">
                <img src={img} alt="Caeser Salad" className="w-full h-52 object-cover" />
                <span className="absolute top-2 right-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded">
                    $14.5
                </span>
            </div>
            <div className="py-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Caeser Salad</h2>
                <p className="text-sm text-gray-600 mt-1">
                    Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <button className="mt-4 px-5 py-2 rounded-md font-medium text-yellow-700 border border-yellow-700 hover:bg-yellow-700 hover:text-white transition-all duration-300">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

const Recommend = () => {
    return (
        <div className="my-12 ">
            <SectionTitle heading="CHEF RECOMMENDS" subHeading="---Should Try---" />
            <div className="flex max-w-6xl mx-auto gap-6 mt-8">
                <SaladCard />
                <SaladCard />
                <SaladCard />
            </div>
        </div>
    );
};

export default Recommend;
