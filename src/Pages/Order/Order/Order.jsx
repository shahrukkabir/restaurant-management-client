import React, { useState, useEffect } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg';
import { Helmet } from 'react-helmet-async';
import CommonCover from '../../Shared/CommonCover';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import { useParams, useNavigate } from 'react-router-dom';

const Order = () => {
  const [data, loading] = useMenu();
  const { category } = useParams();
  const navigate = useNavigate();

  const tabs = ['salad', 'pizza', 'soups', 'desserts', 'drinks'];
  const initialTab = category ? category : 'salad';
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/shop/${tab}`);
  };

  const getItemsForTab = () => {
    switch (activeTab) {
      case 'salad': return data.filter(item => item.category === 'salad');
      case 'pizza': return data.filter(item => item.category === 'pizza');
      case 'soups': return data.filter(item => item.category === 'soup');
      case 'desserts': return data.filter(item => item.category === 'dessert');
      case 'drinks': return data.filter(item => item.category === 'drinks');
      default: return [];
    }
  };

  return (
    <div>
      <Helmet><title>Restaurant | Order</title></Helmet>
      <CommonCover title="OUR SHOP" image={orderCover} description="Would you like to try a dish?" />

      {/* Tabs */}
      <div className="flex gap-6 justify-center mt-6 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => handleTabClick(tab)}
            className={`text-sm font-semibold pb-1 border-b-2 duration-200 uppercase ${activeTab === tab
              ? 'text-yellow-700 border-yellow-700'
              : 'text-white border-transparent hover:border-gray-400'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Show loading or food grid */}
      {loading ? (
        <p className="text-center text-white font-semibold text-xl py-12">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 pb-12">
          {getItemsForTab().map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
