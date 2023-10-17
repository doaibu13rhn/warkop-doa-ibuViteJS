import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import getImageUrl from "../../utils/imageGetter";
import "../../style/style.css";

function ForgotPassword() {
  return (
    <main className="flex gap-[70px] lg:items-center">
        <aside className="hidden lg:block lg:w-2/5 xl:w-1/3">
          <img
            src={getImageUrl("forgotpass", "png")}
            alt="hero"
            className="w-full h-full"
          />
        </aside>
        <section className="font-plusJakartaSans w-full h-full py-12 px-5 flex flex-col justify-center gap-y-5 lg:w-3/5 xl:w-2/3 md:py-20 md:px-24 lg:p-0 lg:pr-[130px]">
          <img
            src={getImageUrl("brand", "png")}
            alt="logo"
            className="w-32 h-8"
          />
          <header>
            <h1 className="text-lg font-semibold mb-5 md:text-2xl text-brown">Fill out the form correctly</h1>
            <p className="text-sm md:text-base font-normal">
            We will send new password to your email
            </p>
          </header>
          <form className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-3 relative">
              <label
                htmlFor="email"
                className="text-sm md:text-base font-semibold text-[#0B132A] lg:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className={`py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary`}
              />
              <div className="icon-email absolute top-[46px] left-4 md:top-[50px]">
                <img
                  src={getImageUrl("message", "png")}
                  alt="mail.svg"
                  className="w-full h-full"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="text-base font-medium text-[#0B132A] bg-primary p-2.5 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300"
            >
              Submit
            </button>
          </form>
          

        </section>
      </main>
  );
}

export default ForgotPassword;