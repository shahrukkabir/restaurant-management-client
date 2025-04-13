import React from 'react';

const CommonCover = ({ image, title, description }) => {
  return (
    <div
      className="bg-cover bg-center h-[600px] flex items-center justify-center mb-8 mx-auto max-w-7xl"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="bg-[rgba(21,21,21,0.6)] text-white p-10 text-center max-w-2xl w-full rounded-md shadow-md">
        <h2 className="text-5xl font-serif uppercase font-bold mb-4">{title}</h2>
        <p className="text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CommonCover;
