import { useState, useEffect } from "react";
import axios from "axios";

import getImageUrl from "../../utils/imageGetter";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import DropdownMobile from "../../components/DropdownMobile";
import { Link, useNavigate } from "react-router-dom";

function CheckoutProduct() {

    const [isDropdownShown, setIsDropdownShow] = useState(false);
    
  return (
    <>
      <NavbarLogin isClick={() => setIsDropdownShow(true)}/>
      <main>
      <section
      className="font-plusJakartaSans py-10 px-5 md:px-24 lg:pt-20 lg:pb-16 lg:px-[130px]"
    >
      <h1 className="text-2xl font-medium text-dark lg:text-4xl">
        Payment Details
      </h1>
    </section>

    <main
      className="font-plusJakartaSans px-5 flex flex-col gap-y-12 sm:px-5 md:px-24 lg:px-[130px] lg:flex-row lg:gap-x-5"
    >
      <section className="lg:w-2/3">
        <div className="mb-8">
          <header className="flex justify-between items-center mb-4">
            <p className="text-xl text-dark font-medium lg:text-[22px]"
              >Your Order</p
            >
            <Link
              to="#"
              className="p-[0.5rem] bg-primary hover:bg-[#db8625] rounded-md text-dark text-sm font-medium active:ring active:ring-orange-300 flex"
              ><img src={getImageUrl("plus", "png")} alt="plusIcon" />Add Menu</Link
            >
          </header>
          <div className="section-body flex flex-col gap-y-4">
          <div className="item-product bg-[#E8E8E84D] flex flex-col gap-y-4 p-4 relative sm:flex-row sm:gap-x-4 sm:items-center">
                <div className="w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] lg:w-1/3">
                  <img
                    src={getImageUrl("product-1", "png")}
                    alt="coffee"
                    className="w-full h-full"
                  />
                </div>
                <div className="product-info flex flex-col items-start gap-y-4 lg:w-2/3">
                  <p className="text-xs text-light bg-[#D00000] p-[10px] rounded-full font-bold">
                    FLASH SALE!
                  </p>
                  <p className="text-lg text-[#0B0909] font-bold">
                    Hazelnut latte
                  </p>
                  <div className="text-sm text-secondary font-normal md:text-lg lg:text-base xl:text-lg flex">
                    <p>
                      2pcs | Regular | Ice | Dine in
                    </p>
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <p className="text-xs text-[#D00000] font-medium line-through">
                      IDR. 30.000
                    </p>
                    <p className="text-lg text-[#0B0909] font-medium lg:text-[22px]">
                      IDR. 15.000
                    </p>
                  </div>
                </div>
                <button type="button" className="absolute top-3 right-3">
                  <img
                    src={getImageUrl("XCircle", "png")}
                    alt="XCircle"
                    className="w-full h-full"
                  />
                </button>
          </div>
          <div className="item-product bg-[#E8E8E84D] flex flex-col gap-y-4 p-4 relative sm:flex-row sm:gap-x-4 sm:items-center">
                <div className="w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] lg:w-1/3">
                  <img
                    src={getImageUrl("product-1", "png")}
                    alt="coffee"
                    className="w-full h-full"
                  />
                </div>
                <div className="product-info flex flex-col items-start gap-y-4 lg:w-2/3">
                  <p className="text-xs text-light bg-[#D00000] p-[10px] rounded-full font-bold">
                    FLASH SALE!
                  </p>
                  <p className="text-lg text-[#0B0909] font-bold">
                    Hazelnut latte
                  </p>
                  <div className="text-sm text-secondary font-normal md:text-lg lg:text-base xl:text-lg flex">
                    <p>
                      2pcs | Regular | Ice | Dine in
                    </p>
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <p className="text-xs text-[#D00000] font-medium line-through">
                      IDR. 30.000
                    </p>
                    <p className="text-lg text-[#0B0909] font-medium lg:text-[22px]">
                      IDR. 15.000
                    </p>
                  </div>
                </div>
                <button type="button" className="absolute top-3 right-3">
                  <img
                    src={getImageUrl("XCircle", "png")}
                    alt="XCircle"
                    className="w-full h-full"
                  />
                </button>
              </div>
            
          </div>
        </div>
        <div>
          <header className="flex justify-between items-center mb-4">
            <p className="text-xl text-dark font-medium lg:text-[22px]"
              >Payment & Info Delivery</p
            >
          </header>
          <form action="" className="flex flex-col gap-y-3">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-dark lg:text-base"
              >Email</label
            >
            <div
              className="flex gap-y-3 border rounded-lg text-xs tracking-wide focus:border-primary w-full"
            >
              <img
                src={getImageUrl("message", "png")}
                alt="mail.svg"
                className="p-3 border-none"
              />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="py-3 px-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label
                htmlFor="fullname"
                className="text-sm font-semibold text-dark lg:text-base"
                >Full Name</label
              >
              <div
                className="flex gap-y-3 border rounded-lg text-xs tracking-wide focus:border-primary w-full"
              >
                <img
                  src={getImageUrl("Profile", "png")}
                  alt="mail.svg"
                  className="p-2 border-none"
                />
                <input
                  type="fullname"
                  id="fullname"
                  placeholder="Enter Your Full Name"
                  className="py-3 px-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-3 relative">
              <label
                htmlFor="address"
                className="text-sm font-semibold text-dark lg:text-base"
                >Address</label
              >
              <div
                className="flex gap-y-3 border rounded-lg text-xs tracking-wide focus:border-primary w-full"
              >
                <img
                  src={getImageUrl("Location", "png")}
                  alt="mail.svg"
                  className="p-3 border-none"
                />
                <input
                  type="address"
                  id="address"
                  placeholder="Enter Your Address"
                  className="py-3 px-2 w-full"
                />
              </div>
            </div>
            <div className="">
              <p className="text-sm font-semibold text-dark lg:text-base"
                >Delivery</p
              >
              <div className="flex justify-between items-center mt-3 gap-x-8">
                <button
                  type="button"
                  className=" py-3 w-1/3 border rounded-md text-center text-sm font-normal text-secondary focus:outline-none focus:border-primary lg:text-base"
                >
                  Dine In
                </button>
                <button
                  type="button"
                  className="xs:ps-3 py-3 md:py-3 w-1/3 border rounded-md xs:text-center md:text-center text-sm font-normal text-secondary focus:outline-none focus:border-primary lg:text-base"
                >
                  Door Delivery
                </button>
                <button
                  type="button"
                  className="py-3 w-1/3 border rounded-md text-center text-sm font-normal text-secondary focus:outline-none focus:border-primary lg:text-base"
                >
                  Pick Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="lg:w-1/3 lg:mt-2.5">
        <header className="mb-4">
          <p className="text-xl text-dark font-medium lg:text-[22px]"
            >Total</p
          >
        </header>
        <div className="section-body bg-[#E8E8E84D] p-[10px] flex flex-col gap-y-5">
          <div className="flex justify-between">
            <p className="text-sm font-bold text-secondary lg:text-lg"
              >Order</p
            >
            <p className="text-sm font-bold text-dark lg:text-lg"
              >Idr. 40.000</p
            >
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-bold text-secondary lg:text-lg"
              >Delivery</p
            >
            <p className="text-sm font-bold text-dark lg:text-lg">Idr. 0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-bold text-secondary lg:text-lg">Tax</p>
            <p className="text-sm font-bold text-dark lg:text-lg"
              >Idr. 4.000</p
            >
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-sm font-bold text-secondary lg:text-lg"
              >Subtotal</p
            >
            <p className="text-sm font-bold text-dark lg:text-lg"
              >Idr. 44.000</p
            >
          </div>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            className="block text-white bg-primary hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Checkout
          </button>
          <div
            id="popup-modal"
            tabindex="-1"
            className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
                <div className="p-6 text-center">
                  <h3
                    className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                  >
                    Are you sure you want to Checkout this product?
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm lg:text-base">We Accept</p>
            <div className="flex justify-between items-center my-5">
              <div>
                <img
                  src={getImageUrl("BRI", "png")}
                  alt="BRI"
                  className="w-full h-full"
                />
              </div>
              <div>
                <img
                  src={getImageUrl("dana", "png")}
                  alt="dana.svg"
                  className="w-full h-full"
                />
              </div>
              <div>
                <img
                  src={getImageUrl("bca", "png")}
                  alt="BCA.svg"
                  className="w-full h-full"
                />
              </div>
              <div>
                <img
                 src={getImageUrl("gopay", "png")}
                  alt="GoPay.svg"
                  className="w-full h-full"
                />
              </div>
              <div>
                <img
                  src={getImageUrl("ovo", "png")}
                  alt="OVO.svg"
                  className="w-full h-full"
                />
              </div>
              <div>
                <img
                  src={getImageUrl("paypal", "png")}
                  alt="Paypal.svg"
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="text-sm font-normal text-secondary lg:text-base"
              >*Get Discount if you pay with Bank Central Asia</p
            >
          </div>
        </div>
      </section>
    </main>
      </main>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default CheckoutProduct;