import { useState } from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";

function NavbarLogin(props) {
  const [btnArrow, setBtnArrow] = useState(false);
  const btnArrowHandle = () => {
    setBtnArrow((state) => !state);
  };

  return (
    <nav className="w-full flex justify-between py-4 px-5 items-center font-plusJakartaSans bg-[#0B0909] md:px-24 lg:px-[130px]">
      <div className="nav-start flex items-center gap-x-[60px] text-sm font-normal">
        <div>
          <img
            src={getImageUrl("brand-white", "png")}
            alt="logo"
            className="w-32 h-8"
          />
        </div>
        <Link
          to="/home"
          className="text-light hover:border-b-2 hover:border-primary focus:border-b-2 focus:border-primary hidden lg:block"
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
        <div className="icon-search hidden lg:block">
          <img
            src={getImageUrl("Search", "png")}
            alt="Search"
            className="w-full h-full"
          />
        </div>
        <Link to="/checkout" className="hidden lg:block">
          <img
            src={getImageUrl("ShoppingCart", "png")}
            alt="ShoppingCart"
            className="w-full h-full"
          />
        </Link>
        <Link to="/profile" className="hidden lg:block">
          <img
            src={getImageUrl("user-profile", "png")}
            alt="icon-profile"
            className="rounded-full w-8 h-8"
          />
        </Link>
        <button id="dropdown-arrow" className="hidden lg:block cursor-pointer">
          <img
            src={getImageUrl("down", "png")}
            alt="down"
            className="w-full h-full"
            onClick={btnArrowHandle}
          />
        </button>
        <div
          className={`absolute top-20 right-24 bg-[#0B0909] text-light text-sm font-normal py-2 px-6 ${
            btnArrow ? "" : "hidden"
          } lg:right-32`}
          id="dropdown-menu"
        >
          <ul className="flex flex-col gap-y-2">
            <li className="p-1 text-light hover:bg-primary hover:text-[#0B0909] hover:font-medium">
              <Link to="/historyOrder">History Order</Link>
            </li>
            <li className="p-1 text-light hover:bg-primary hover:text-[#0B0909] hover:font-medium">
              <Link to="/detailOrder">Detail Order</Link>
            </li>
            <li className="p-1 text-light hover:bg-primary hover:text-[#0B0909] hover:font-medium">
              <Link to="/detailProduct">Detail product</Link>
            </li>
            <li className="p-1 text-light hover:bg-primary hover:text-[#0B0909] hover:font-medium">
              <button onClick={() => props.isLogoutClick()}>Logout</button>
            </li>
          </ul>
        </div>

        <Link to="#" className="icon-search block lg:hidden">
          <img
            src={getImageUrl("Search", "png")}
            alt="Search"
            className="w-full h-full"
          />
        </Link>
        <Link to="/checkout" className="block lg:hidden">
          <img
            src={getImageUrl("ShoppingCart", "png")}
            alt="ShoppingCart"
            className="w-full h-full"
          />
        </Link>
        <button className="lg:hidden" onClick={() => props.isClick()}>
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

export default NavbarLogin;