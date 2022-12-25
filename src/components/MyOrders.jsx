import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiEye } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { URL } from '../App';

const MyOrders = () => {
  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const userId = userInfo._id;
  console.log(userId);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultOrders = await axios.get(`${URL}/api/orders/mine/${userId}`);
      const resultOrdersData = resultOrders.data;
      const sortResultOrdersData = resultOrdersData.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
      );
      setOrders(sortResultOrdersData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="hidden sm:block">
        <div className="mo-container">
          <div className="mo-row">
            <h2 className="f-title">My Orders</h2>
          </div>
          <div className="mo-row">
            {orders.length === 0 ? (
              <h3 className="text-center py-[40%] sm:py-[15%]">No Orders</h3>
            ) : (
              <div className="mo-groups">
                {orders?.map((item) => (
                  <div key={item._id} className="mo-group">
                    <h3 className="text-xl">ORDER ID: {item._id}</h3>
                    <Link to={`/order/${item._id}`}>
                      <HiEye
                        className="text-red-600 hover:text-gray-300"
                        size={20}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE STYLE */}
      <div className="sm:hidden">
        <div className="px-2">
          <div className="flex items-center justify-center py-8">
            <h3>My Orders</h3>
          </div>
          <div className="my-10">
            <div className="flex flex-col gap-10">
              {orders.length === 0 ? (
                <h3 className="text-center py-[40%] sm:py-[15%]">No Orders</h3>
              ) : (
                <div>
                  {orders?.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between border-b-[1px] border-black"
                    >
                      <p className="text-lg font-bold">ORDER ID: {item._id}</p>
                      <Link to={`/order/${item._id}`}>
                        <HiEye
                          className="text-red-600 hover:text-gray-300"
                          size={20}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
