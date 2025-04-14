import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CommonCover from '../../Shared/CommonCover';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import orderCover from '../../../assets/shop/banner2.jpg';

const Order = () => {
  const [menu, loading] = useMenu();
  const { category } = useParams();

  const tabs = ['SALAD', 'PIZZA', 'SOUPS', 'DESSERTS', 'DRINKS'];
  const [activeTab, setActiveTab] = useState(category?.toUpperCase() || 'SALAD');

  useEffect(() => {
    setActiveTab(category?.toUpperCase() || 'SALAD');
  }, [category]);

  const filteredItems = menu.filter(item => item.category.toUpperCase() === activeTab);

  return (
    <div>
      <Helmet><title>Restaurant | Order</title></Helmet>
      <CommonCover title="OUR SHOP" image={orderCover} description="Would you like to try a dish?" />

      {/* Tabs */}
      <div className="flex gap-4 justify-center mt-6 mb-8 flex-wrap">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`text-sm font-semibold pb-1 border-b-2 duration-200 ${activeTab === tab
              ? 'text-yellow-700 border-yellow-700'
              : 'text-white border-transparent hover:border-gray-400'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-center text-white font-semibold text-xl py-12">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 pb-12">
          {filteredItems.map(item => <FoodCard key={item._id} item={item} />)}
        </div>
      )}
    </div>
  );
};

export default Order;
