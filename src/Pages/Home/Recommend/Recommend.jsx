import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'; 
import img from '../../../assets/home/slide1.jpg'

const SaladCard = () => {
    return (
        <div className="max-w-6xl mb-12 overflow-hidden shadow-md border ">
            <img src={img} className="w-full h-60 object-cover"/>
            <div className="p-4 py-12 text-center">
                <h2 className="text-lg font-semibold text-white">Caeser Salad</h2>
                <p className="text-sm text-white mt-1">
                    Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <button className="mt-4 px-5 py-2 rounded-md font-medium text-white border border-transparent bg-gray-700 hover:bg-gray-900 hover:text-yellow-500 hover:shadow-none transition-all duration-300">
                    ADD TO CART
                </button>

            </div>
        </div>
    );
};

const Recommend = () => {
    return (
        <div className="my-12">
            <SectionTitle heading="CHEF RECOMMENDS" subHeading="---Should Try---" />
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                <SaladCard />
                <SaladCard />
                <SaladCard />
            </div>
        </div>
    );
};

export default Recommend;
