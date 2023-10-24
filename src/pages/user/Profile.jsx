import { useState, useEffect } from "react";
import axios from "axios";

import getImageUrl from "../../utils/imageGetter";

import NavbarLogin from "../../components/NavbarLogin";
import DropdownMobile from "../../components/DropdownMobile";
import Footer from "../../components/Footer";

function Profile() {

  const [isDropdownShown, setIsDropdownShow] = useState(false);

  const [isPassShown, setIsPassShown] = useState(false);
  const showPassHandler = () => {
    setIsPassShown((state) => !state);
  };


  return (
    <>
      <NavbarLogin
        isClick={() => setIsDropdownShow(true)}
      />
      <main>
      <header className="pt-10 pb-7 px-5 md:px-24 lg:px-[130px]">
        <h1 className="font-plusJakartaSans text-2xl font-medium text-[#0B0909] md:text-3xl xl:text-5xl">
          Profile
        </h1>
      </header>
      <form>
        <main className="font-plusJakartaSans px-5 md:px-24 lg:px-[130px] flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <section className="border border-[#E8E8E8] rounded-md py-3.5 px-12 flex flex-col gap-y-4 items-center h-full lg:w-1/3">
            <span className="text-lg font-medium text-dark lg:text-xl">
              Ghaluh Wizard
            </span>
            <span className="text-sm font-normal text-secondary">
            ghaluhwizz@gmail.com
            </span>
            <img
              src={getImageUrl("user-profile", "png")}
              alt="user-image"
              className="w-20 h-20 rounded-full"
              // name="users_image"
            />
           <button className="text-sm font-medium text-dark py-3 px-6 bg-primary hover:bg-amber-600 rounded-md w-full lg:text-xs xl:text-sm active:ring active:ring-orange-300 outline-none file:hidden">Upload New Photo</button>
            <span className="text-base font-normal text-secondary lg:text-xs xl:text-sm">
              Since <span className="font-medium">20 January 2022</span>
            </span>
          </section>
          <section className="border border-[#E8E8E8] rounded-md py-4 px-2.5 md:py-6 md:px-12 lg:w-2/3">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-3 relative">
                <label
                  htmlFor="fullname"
                  className="text-sm md:text-base font-semibold text-dark lg:text-base"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"  
                  placeholder="Enter Your Full Name"
                  className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary"
                />
                <div className="icon-email absolute top-[43px] left-2 md:top-[45px]">
                  <img
                    src={getImageUrl("Profile", "png")}
                    alt="mail.svg"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3 relative">
                <label
                  htmlFor="email"
                  className="text-sm md:text-base font-semibold text-dark lg:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary"
                />
                <div className="icon-email absolute top-[48px] left-3 md:top-[52px]">
                  <img
                    src={getImageUrl("message", "png")}
                    alt="mail.svg"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3 relative">
                <label
                  htmlFor="phone"
                  className="text-sm md:text-base font-semibold text-dark lg:text-base"
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary"
                />
                <div className="absolute top-[46px] left-3 md:top-[50px]">
                  <img
                    src={getImageUrl("PhoneCall", "png")}
                    alt="PhoneCall"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3 relative">
                <label
                  htmlFor="password"
                  className="text-sm md:text-base font-semibold text-[#0B132A] lg:text-base"
                >
                  Password
                </label>
                <input
                  type={isPassShown ? "text" : "password"}
                  id="password"
                  placeholder="Enter Your Password"
                  className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary"
                />
                <div className="icon-password absolute top-[46px] left-4 md:top-[50px]">
                  <img
                    src={getImageUrl("Password", "png")}
                    alt="Password"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className={`absolute top-[46px] right-4 md:top-[50px] ${
                    isPassShown ? " hidden" : "block"
                  }`}
                  id="btnHiddenPassword"
                  onClick={showPassHandler}
                >
                  <img
                    src={getImageUrl("EyeSlash", "png")}
                    alt="EyeSlash"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className={`absolute top-[45px] right-[15px] md:top-[49px] ${
                    isPassShown ? " block" : " hidden"
                  }`}
                  id="btn-show-password"
                  onClick={showPassHandler}
                >
                  <img
                    src={getImageUrl("EyeSlash", "png")}
                    alt="eye"
                    className="w-[18px] h-[18px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3 relative">
                <label
                  htmlFor="address"
                  className="text-sm md:text-base font-semibold text-dark lg:text-base"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="users_address"
                  placeholder="Enter Your Address"
                  className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary"
                />
                <div className="absolute top-[46px] left-4 md:top-[50px]">
                  <img
                    src={getImageUrl("Location", "png")}
                    alt="Location"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-base font-medium text-dark bg-primary p-2.5 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300"
              >
                Update
              </button>
            </div>
          </section>
        </main>
      </form>
      </main>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default Profile;