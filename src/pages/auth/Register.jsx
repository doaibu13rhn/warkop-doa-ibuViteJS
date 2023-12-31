import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import getImageUrl from "../../utils/imageGetter";
import "../../style/style.css";


function Register() {

  const [isPassShown, setIsPassShown] = useState(false);
  const [isPassShown2, setIsPassShown2] = useState(false);

  const showPassHandler = () => {
    setIsPassShown((state) => !state);
  };

  const showPassHandler2 = () => {
    setIsPassShown2((state) => !state);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.confirmPassword.value)
      return alert('Passwod isnt match');

    const body = {
      users_Username: e.target.Username.value,
      users_email: e.target.email.value,
      users_password: e.target.password.value,
    };

    const url = "http://localhost:8000/auth/register";

    axios.post(url, body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  };

  return (
    <>
      <main className="flex gap-[70px] lg:items-center">
        <aside className="hidden lg:block lg:w-2/5 xl:w-1/3">
          <img
            src={getImageUrl("register", "png")}
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
            <h1 className="text-lg font-semibold mb-5 md:text-2xl">Register</h1>
            <span className="text-sm md:text-base font-normal">
              Fill out the form correctly
            </span>
          </header>
          <form className="flex flex-col gap-y-5" onSubmit={submitHandler}>
            <div className="flex flex-col gap-y-3 relative">
              <label
                htmlFor="Username"
                className="text-sm md:text-base font-semibold text-[#0B132A] lg:text-base"
              >
                Full Name
              </label>
              <input
                type="text"
                id="Username"
                placeholder="Enter Your Full Name"
                className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary"
              />
              <div className="icon-email absolute top-[42px] left-2 md:top-[47px]">
                <img
                  src={getImageUrl("Profile", "png")}
                  alt="mail.svg"
                  className="w-auto"
                />
              </div>
            </div>
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
                className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wide outline-none focus:border-primary"
              />
              <div className="icon-email absolute top-[48px] left-3 md:top-[53px]">
                <img
                  src={getImageUrl("message", "png")}
                  alt="mail.svg"
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
                htmlFor="confirmPassword"
                className="text-sm md:text-base font-semibold text-[#0B132A] lg:text-base"
              >
                Password
              </label>
              <input
                type={isPassShown2 ? "text" : "password"}
                id="confirmPassword"
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
                  isPassShown2 ? " hidden" : "block"
                }`}
                id="btnHiddenPassword"
                onClick={showPassHandler2}
              >
                <img
                  src={getImageUrl("EyeSlash", "png")}
                  alt="EyeSlash"
                  className="w-full h-full"
                />
              </div>
              <div
                className={`absolute top-[45px] right-[15px] md:top-[49px] ${
                  isPassShown2 ? " block" : " hidden"
                }`}
                id="btn-show-password"
                onClick={showPassHandler2}
              >
                <img
                  src={getImageUrl("EyeSlash", "png")}
                  alt="eye"
                  className="w-[18px] h-[18px]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-base font-medium text-[#0B132A] bg-primary p-2.5 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300"
            >
              Register
            </button>
          </form>
          <div className="text-center text-sm md:text-base">
            <span>
              Have An Account?
              <span>
                <Link to="/" className="font-medium underline">
                  Login
                </Link>
              </span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <hr className="w-1/3" />
            <span className="1/3">Or</span>
            <hr className="w-1/3" />
          </div>
          <div className="flex justify-center gap-4 text-lg font-normal font-plusJakartaSans text-[#4F5665]">
            <a
              href="#"
              className="p-5 bg-[#FFF] hover:bg-[#ebebeb] rounded drop-shadow-md md:flex md:gap-x-4 md:items-center md:w-full md:justify-center"
            >
              <div>
                <img
                  src={getImageUrl("facebook-icon", "png")}
                  alt="facebook-icon"
                  className="w-full h-full"
                />
              </div>
              <span className="hidden md:block">Facebook</span>
            </a>
            <a
              href="#"
              className="p-5 bg-[#FFF] hover:bg-[#ebebeb] rounded drop-shadow-md md:flex md:gap-x-4 md:items-center md:w-full md:justify-center"
            >
              <div>
                <img
                  src={getImageUrl("google-icon", "png")}
                  alt="google-icon"
                  className="w-full h-full"
                />
              </div>
              <span className="hidden md:block">Google</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;