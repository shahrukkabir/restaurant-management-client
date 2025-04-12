import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-16">
            <p className="text-yellow-600 italic text-lg mb-4">{subHeading}</p>
            <div className="flex items-center justify-center">
                <div className="border-t border-gray-300 w-24"></div>
                <h3 className="text-2xl font-semibold uppercase mx-6 text-white">{heading}</h3>
                <div className="border-t border-gray-300 w-24"></div>
            </div>
        </div>
    );
};

export default SectionTitle;
