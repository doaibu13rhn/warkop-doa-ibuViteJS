import React from "react";
import getImageUrl from "../utils/imageGetter";

function Footer() {
  return (
    <footer className="font-plusJakartaSans p-5 mt-5 flex flex-wrap gap-y-8 sm:px-5 md:px-24 pt md:pt-10 md:pb-[140px] md:mt-10 lg:px-[130px] bg-[#F8F8F8] md:bg-contain">
      <section className="flex flex-col gap-y-6 w-full lg:self-end lg:w-2/5 lg:pr-16">
        <img
          src={getImageUrl("brand", "png")}
          alt="logo"
          className="w-32 h-8"
        />
        <span className="text-base font-normal text-secondary text-justify">
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </span>
        <span className="font-rubik text-base font-semibold text-dark">
          &copy;2020CoffeeStore
        </span>
      </section>
      <div className="mid flex gap-x-[7rem] md:h-2 md:w-auto">
        <section
          className="flex flex-col gap-y-5 w-full sm:w-1/3 md:auto lg:w-auto"
        >
          <p className="text-base font-medium text-dark">Product</p>
          <p className="text-sm font-normal text-secondary">Our Product</p>
          <p className="text-sm font-normal text-secondary">Pricing</p>
          <p className="text-sm font-normal text-secondary">Locations</p>
          <p className="text-sm font-normal text-secondary">Countries</p>
          <p className="text-sm font-normal text-secondary">Blog</p>
        </section>
        <section
          className="flex flex-col gap-y-5 w-full sm:w-1/3 md:auto lg:w-auto"
        >
          <p className="text-base font-medium text-dark">Engage</p>
          <p className="text-sm font-normal text-secondary">Partner</p>
          <p className="text-sm font-normal text-secondary">FAQ</p>
          <p className="text-sm font-normal text-secondary">About Us</p>
          <p className="text-sm font-normal text-secondary">Provice Policy</p>
          <p className="text-sm font-normal text-secondary">Term of Services</p>
        </section>
      </div>
      <section className="social-media w-full sm:w-1/3 md:auto lg:w-auto md:ms-[4rem] lg:ms-[5rem]">
        <p className="text-base font-medium text-dark mb-4">Social Media</p>
        <div className="flex">
          <div>
            <img
              src={getImageUrl("facebook-new", "png")}
              alt="Facebook"
            />
          </div>
          <div>
            <img
              src={getImageUrl("twitter-yellow", "png")}
              alt="Twitter"             
            />
          </div>
          <div>
            <img
              src={getImageUrl("instagram-yellow", "png")}
              alt="Instagram"            
            />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;