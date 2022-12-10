import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn, FiHeart } from "react-icons/fi";
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

const HeaderNoTransparent = () => {

  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {cart, wish} = state;

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
    <div className="text-black nav-scrolled flex w-full justify-between items-center h-25 p-10 absolute z-10">
      <div>
        <div className="flex gap-2">
          {/* HAMBURGER */}
          <div onClick={handleNav} className="z-10">
            {nav ? (
              <AiOutlineClose
                className="text-black fixed top-0 left-0 m-2"
                size={20}
              />
            ) : (
              <HiOutlineMenuAlt4 size={20} />
            )}
          </div>
          <h1 className={logo ? "hidden" : "block"}>
            <span className="text-6xl">
              <Link to="/">JIGIT</Link>
            </span>
          </h1>
        </div>
      </div>
      <ul className="menu-item2 hidden md:flex">
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
      <>
        <div className="hiddem sm:block">
          <div className="hidden md:flex">
            {userInfo ? (
              <>
                <div onClick={logoutHandler} className="menu-div cursor-pointer">
                  <FiLogIn className="mr-2 mt-[2px]" size={20} />
                  <span className="mr-4">Logout</span>
                </div>

                <Link to="/wish">
                  <div className="menu-div">
                    <FiHeart className="mr-6" size={22} />
                    <span className="menu-badge absolute top-[-10px] right-[17px] font-bold text-black">
                      {wish.wishItems?.length}
                    </span>
                  </div>
                </Link>
                <Link to="/cart">
                  <div className="menu-div">
                    <BsBag size={22} />
                    {cartItemsLength > 0 ? (<span className="menu-badge absolute top-[-10px] right-[-7px] font-bold text-black">{cartItemsLength}</span>) : (<span className="menu-badge absolute top-[-10px] right-[-7px] font-bold text-black">0</span>)}
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
        </div>

        {/* MOBILE STYLE HAMBURGER */}
        <div className="sm:hidden flex font-bold">
          <Link to="/wish">
            <div className="menu-div">
              <FiHeart className="mr-6" size={25} />
              <span className="menu-badge absolute top-[-9px] right-[10px]  px-[5px] rounded-[50%] text-black">
              {wish.wishItems?.length}
              </span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="menu-div">
              <BsBag size={25} />
              {cartItemsLength ? (<span className="menu-badge absolute top-[-9px] right-[-15px] px-[7px] rounded-[50%] text-black">{cartItemsLength}</span>) : (<span className="menu-badge absolute top-[-9px] right-[-15px] px-[7px] rounded-[50%] text-black">0</span>)}
            </div>
          </Link>
        </div>
      </>

      {/* MOBILE MENU DROP DOWN*/}
      <div
        onClick={handleNav}
        className={
          nav
            ? "text-black fixed left-0 top-0 w-full sm:w-[50%] md:w-[30%] h-full bg-gray-200/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1 className="text-6xl cursor-pointer">JIGIT</h1>
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
              <li onClick={logoutHandler} className="border-b border-gray-300">
                <Link to="/login">LOGOUT</Link>
              </li>
              <li className="border-b border-gray-300">
                <Link to="/wish">WISHLIST</Link>
              </li>
              <li className="border-b border-gray-300 mb-16">
                <Link to="/cart">CART</Link>
              </li>
              <div className="flex items-center justify-center hover:scale-[1.1] hover:delay-100">
                <Link to="/account">
                  <button className="py-2 px-6 bg-black text-white">
                    Account
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <li className="border-b border-gray-300">
              <Link to="/login">LOGIN</Link>
            </li>
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
  );
};

export default HeaderNoTransparent;
