import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderDetails = ({ item }) => {
  return (
    <div className="pro-container">
      <Link to={`/product/${item._id}`}>
        <div className="pro">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="flex flex-col justify-center items-center py-2">
          <span className="text-center">{item.title}</span>
          <h5 className="text-lg font-bold">{item.subcategory}</h5>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between gap-16 font-[600]">
              <span className="">
                <span className="font-light">size:</span> {item.size}
              </span>
              <span className="text-black">
                <span className="font-light">color:</span> {item.color}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MyOrderDetails;
