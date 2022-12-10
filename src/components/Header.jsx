import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn, FiHeart, FiLogOut } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { Store } from "../store";

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish } = state;

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const cartItemsLength = cart.cartItems.reduce((a,c) => a + c.quantity, 0)

  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    toast.success("You have successfully logged out!");
    navigate("/login");
  };

  return (
    <div className="flex w-full items-center justify-between h-25 p-10 absolute z-10 text-white">
      <div>
        <div className="flex gap-2">
          {/* HAMBURGER */}
          <>
            <div onClick={handleNav} className="hidden sm:block z-10">
              {nav ? (
                <AiOutlineClose className="absolute top-0 left-0 m-2 text-black" size={20} />
              ) : (
                <HiOutlineMenuAlt4 size={20} />
              )}
            </div>

            {/* MOBILE STYLE FOR HAMBURGER */}
            <div onClick={handleNav} className="sm:hidden z-10">
              {nav ? (
                <AiOutlineClose
                  className="text-black fixed top-0 left-0 m-2"
                  size={20}
                />
              ) : (
                <HiOutlineMenuAlt4 size={20} />
              )}
            </div>
          </>
          <h1 className={logo ? "hidden" : "block"}>
            <span className="text-6xl">
              <Link to="/">JIGIT</Link>
            </span>
          </h1>
        </div>
      </div>
      <ul className="menu-item hidden md:flex absolute right-[70px]">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/blogs">BLOG</Link>
        </li>
        {userInfo && (
          <li>
            <Link to="/account">ACCOUNT</Link>
          </li>
        )}
      </ul>
      <div className="hidden md:flex absolute right-10">
        {userInfo ? (
          <>
            <div onClick={logoutHandler} className="menu-div cursor-pointer">
              <FiLogOut className="mr-2 mt-[2px]" size={20} />
              <span className="mr-4">Logout</span>
            </div>
            <Link to="/wish">
              <div className="menu-div">
                <FiHeart className="mr-6" size={22} />
                <span className="menu-badge absolute top-[-10px] right-[17px] font-bold text-white">
                  {wish.wishItems.length}
                </span>
              </div>
            </Link>
            <Link to="/cart">
              <div className="menu-div">
                <BsBag size={22} />
               {cartItemsLength > 0 ? (<span className="menu-badge absolute top-[-10px] right-[-7px] font-bold text-white ">{cartItemsLength}</span>) : (<span className="menu-badge absolute top-[-10px] right-[-7px] font-bold text-white ">0</span>)}
              </div>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <div className="menu-div">
              <FiLogIn className="mr-2 mt-[2px]" size={20} />
              <span className="mr-6">Login</span>
            </div>
          </Link>
        )}
      </div>

      {/* MOBILE MENU DROP DOWN*/}
      <div>
        <div
          onClick={handleNav}
          className={
            nav
              ? "w-full md:w-[30%] sm:w-[50%] h-full text-black fixed left-0 top-0 bg-gray-200/90 px-4 py-7 flex flex-col"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <h1 className="text-4xl cursor-pointer">JIGIT</h1>
            <li className="border-b border-gray-300">
              <Link to="/">HOME</Link>
            </li>
            <li className="border-b border-gray-300">
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="border-b border-gray-300">
              <Link to="/blogs">BLOG</Link>
            </li>
            {userInfo ? (
              <>
                <li
                  onClick={logoutHandler}
                  className="border-b border-gray-300"
                >
                  <Link to="/login">LOGOUT</Link>
                </li>
                <li className="border-b border-gray-300">
                  <Link to="/wish">WISHLIST</Link>
                </li>
                <li className="border-b border-gray-300 mb-16">
                  <Link to="/cart">CART</Link>
                </li>
              </>
            ) : (
              <li className="border-b border-gray-300">
                <Link to="/login">LOGIN</Link>
              </li>
            )}

            {userInfo && (
              <div className="flex items-center justify-center hover:scale-[1.1] hover:delay-100">
                <Link to="/account">
                  <button className="py-2 px-6 bg-black text-white">
                    ACCOUNT
                  </button>
                </Link>
              </div>
            )}

            <div className="flex justify-between mt-6">
              <FaFacebook className="icon text-blue-700" />
              <FaTwitter className="icon text-blue-500" />
              <FaInstagram className="icon text-red-600" />
              <FaPinterest className="icon text-red-800" />
              <FaYoutube className="icon text-red-700" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
