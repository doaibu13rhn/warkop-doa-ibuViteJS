import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";

function Navbar(props) {
  return (
    <nav className="w-full flex justify-between py-4 px-5 items-center font-plusJakartaSans bg-[#0B0909] md:px-24 lg:px-[130px]"> 
      <div className="nav-start flex items-center gap-x-[60px] text-sm font-normal">
        <img
          src={getImageUrl("brand-white", "png")}
          alt="logo"
          className="w-32 h-8"
        />
        <Link
          to="/home"
          className="text-light hover:border-b-2 border-primary border-b-2 hidden lg:block"
        >
          Home
        </Link>
        <Link
          to="/product"
          className="text-light hover:border-b-2 hover:border-primary focus:border-b-2 focus:border-primary hidden lg:block"
        >
          Product
        </Link>
      </div>
      <div className="nav-end flex gap-x-[22px] items-center">
        <Link to="#" className="icon-search hidden lg:block">
          <img
            src={getImageUrl("Search", "png")}
            alt="Search"
            className="w-full h-full"
          />
        </Link>
        <Link to="/checkout-product" className="hidden lg:block">
          <img
            src={getImageUrl("ShoppingCart", "png")}
            alt="ShoppingCart"
            className="w-full h-full"
          />
        </Link>
        <Link
          to="/"
          className="text-light text-sm font-medium py-3 px-[18px] border border-[#ebeaea] hover:bg-light hover:text-dark rounded-md hidden lg:block active:ring active:ring-slate-300"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="text-dark text-sm font-medium py-3 px-[18px] bg-primary hover:bg-amber-600 rounded-md hidden lg:block active:ring active:ring-orange-300"
        >
          Sign Up
        </Link>
        <Link to="#" className="icon-search block lg:hidden">
          <img
            src={getImageUrl("Search", "png")}
            alt="Search"
            className="w-full h-full"
          />
        </Link>
        <Link to="/checkout-product" className="block lg:hidden">
          <img
            src={getImageUrl("ShoppingCart", "png")}
            alt="ShoppingCart"
            className="w-full h-full"
          />
        </Link>
        <button className="text-2xl lg:hidden" onClick={() => props.isClick()}>
          <img
            src={getImageUrl("hamburger", "png")}
            alt="burger-menu"
            id="burger-menu"
            className="w-full h-full"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;