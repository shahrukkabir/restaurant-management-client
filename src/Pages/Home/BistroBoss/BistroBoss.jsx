import React from 'react';
import img from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
  return (
    <div className="relative bg-cover max-w-6xl mb-8 mx-auto bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url(${img})`, }}>
      <div className="bg-white bg-opacity-90 p-10 text-center max-w-2xl rounded-md shadow-md">
        <h2 className="text-3xl font-serif text-black uppercase mb-4">Bistro Boss</h2>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus
          laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius
          dolore at, nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
