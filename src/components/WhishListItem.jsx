import React from 'react';
import { Link } from 'react-router-dom';

const WhishListItem = ({ item, removeItemHandler }) => {
  return (
    <>
      <div className="hidden sm:block">
        <div className="pro-container">
          <Link to={`/product/${item._id}`}>
            <div className="pro">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="des flex flex-col justify-center items-center h-[120px] border-2 text-center rounded-b">
              <span>{item.title}</span>
              <h5 className="text-lg font-bold">{item.subcategory}</h5>
              <div>
                <span className="mr-12">${item.price?.toFixed(2)}</span>
                <span className="ml-12">{item.star}</span>
              </div>
            </div>
          </Link>
        </div>
        <button className="ml-48 mb-0" onClick={() => removeItemHandler(item)}>
          <span className="font-bold text-red-600">DELETE</span>
        </button>
      </div>

      {/* MOBILE STYLE */}
      <div className="sm:hidden">
        <div className="pro-container">
          <Link to={`/product/${item._id}`}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="flex flex-col justify-center items-center py-2">
              <span className="text-xl font-[600]">{item.title}</span>
              <h5 className="text-2xl font-bold">{item.subcategory}</h5>
              <div>
                <span className="mr-12">${item.price?.toFixed(2)}</span>
                <span className="ml-12">{item.star}</span>
              </div>
            </div>
          </Link>
        </div>
        <button className="ml-48 mb-0" onClick={() => removeItemHandler(item)}>
          <span className="font-bold text-red-600">DELETE</span>
        </button>
      </div>
    </>
  );
};

export default WhishListItem;
