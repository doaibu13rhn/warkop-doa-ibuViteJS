import { useState, useEffect } from "react";

import getImageUrl from "../../utils/imageGetter";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import DropdownMobile from "../../components/DropdownMobile";

function DetailOrder() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  return (
    <>
      <NavbarLogin
        isClick={() => setIsDropdownShow(true)}
      />
      <main>
      <header className="font-plusJakartaSans py-8 px-5 md:px-24 lg:py-10 lg:px-[130px] min-[1400px]:pt-[78px] min-[1400px]:pb-[64px]">
        <h1 className="text-2xl font-medium text-dark md:text-3xl lg:text-3xl xl:text-5xl">
          Order <span className="font-bold">#12354-09893</span>
        </h1>
        <p className="text-base font-normal text-secondary mt-2">
          21 March 2023 at 10:30 AM
        </p>
      </header>
      <main className="font-plusJakartaSans px-5 flex flex-col gap-y-12 md:px-24 lg:px-[130px] lg:flex-row lg:gap-x-5 justify-between">
        <section className="lg:w-1/2">
          <header className="mb-4">
            <h2 className="text-xl text-dark font-medium lg:text-[22px]">
              Order Information
            </h2>
          </header>
          <section className="text-sm md:text-base">
            <div className="flex gap-x-3 items-center border-b border-[#e8e8e8e8] py-5 px-3.5">
              <div className="flex-none">
                <img
                  src={getImageUrl("Profile", "png")}
                  alt="profile"
                  className="w-full h-full"
                />
              </div>
              <p className="flex-1 text-secondary font-medium">Fullname</p>
              <p className="flex-2 text-dark font-bold text-right">
                Ghaluh Wizard Anggoro
              </p>
            </div>
            <div className="flex gap-x-3 items-center border-b border-[#e8e8e8e8] py-5 px-3.5">
              <div className="flex-none">
                <img
                  src={getImageUrl("Location", "png")}
                  alt="Location"
                  className="w-full h-full"
                />
              </div>
              <p className="flex-1 text-secondary font-medium">Address</p>
              <p className="flex-2 text-dark font-bold text-right">
                Griya bandung indah
              </p>
            </div>
            <div className="flex gap-x-3 items-center border-b border-[#e8e8e8e8] py-5 px-3.5">
              <div className="flex-none">
                <img
                  src={getImageUrl("PhoneCall", "png")}
                  alt="PhoneCall"
                  className="w-full h-full"
                />
              </div>
              <p className="flex-1 text-secondary font-medium">Phone</p>
              <p className="flex-1 text-dark font-bold text-right">
                082116304338
              </p>
            </div>
            <div className="flex gap-x-3 items-center border-b border-[#e8e8e8e8] py-5 px-3.5">
              <div className="flex-none">
                <img
                  src={getImageUrl("u_postcard", "png")}
                  alt="u_postcard"
                  className="w-full h-full"
                />
              </div>
              <p className="flex-1 text-secondary font-medium">
                Payment Method
              </p>
              <p className="flex-1 text-dark font-bold text-right">Cash</p>
            </div>
            <div className="flex gap-x-3 items-center border-b border-[#e8e8e8e8] py-5 px-3.5">
              <div className="flex-none">
                <img
                  src={getImageUrl("truck", "png")}
                  alt="truck"
                  className="w-full h-full"
                />
              </div>
              <p className="flex-1 text-secondary font-medium">Shipping</p>
              <p className="flex-1 text-dark font-bold text-right">Dine In</p>
            </div>
            <div className="flex gap-x-3 items-center border-b border-[#e8e8e8e8] py-5 px-3.5">
              <div className="flex-none">
                <img
                  src={getImageUrl("status", "png")}
                  alt="status"
                  className="w-full h-full"
                />
              </div>
              <p className="flex-1 text-secondary font-medium">Status</p>
              <p className="text-sm text-dark font-bold py-2 px-4 rounded-full bg-[#00A70033]">
                Done
              </p>
            </div>
            <div className="flex gap-x-3 items-center justify-between py-5 px-3.5">
              <p className="text-secondary font-medium">Total Transaksi</p>
              <p className="text-sm text-dark font-bold">Idr 40.000</p>
            </div>
          </section>
        </section>
        <section className="lg:w-1/2">
          <header className="mb-4">
            <h2 className="text-xl text-dark font-medium lg:text-[22px]">
              Your Order
            </h2>
          </header>
          <section className="flex flex-col gap-y-4">
            <div className="item-product bg-[#E8E8E84D] flex flex-col gap-y-4 p-4 sm:flex-row sm:gap-x-4 sm:items-center">
              <div className="w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] lg:w-1/3">
                <img
                  src={getImageUrl("product-4", "png")}
                  alt="product-4"
                  className="w-full h-full"
                />
              </div>
              <div className="product-info flex flex-col items-start gap-y-4 lg:w-2/3">
                <p className="text-xs text-light bg-[#D00000] p-[10px] rounded-full font-bold">
                  FLASH SALE!
                </p>
                <p className="text-lg text-[#0B0909] font-bold">
                  Hazelnut Latte
                </p>
                <div className="text-sm text-secondary font-normal md:text-lg lg:text-base xl:text-lg flex">
                  <p>2pcs | Regular | Ice | DineIn</p>
                </div>
                <div className="flex gap-x-4 items-center">
                  <p className="text-xs text-[#D00000] font-medium line-through">
                    IDR40.000
                  </p>
                  <p className="text-lg text-[#0B0909] font-medium lg:text-[22px]">
                    IDR20.000
                  </p>
                </div>
              </div>
            </div>
            <div className="item-product bg-[#E8E8E84D] flex flex-col gap-y-4 p-4 sm:flex-row sm:gap-x-4 sm:items-center">
              <div className="w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] lg:w-1/3">
                <img
                  src={getImageUrl("product-2", "png")}
                  alt="product-2"
                  className="w-full h-full"
                />
              </div>
              <div className="product-info flex flex-col items-start gap-y-4 lg:w-2/3">
                <p className="text-xs text-light bg-[#D00000] p-[10px] rounded-full font-bold">
                  FLASH SALE!
                </p>
                <p className="text-lg text-[#0B0909] font-bold">
                  Hazelnut Latte
                </p>
                <div className="text-sm text-secondary font-normal md:text-lg lg:text-base xl:text-lg flex">
                  <p>2pcs | Regular | Ice | DineIn</p>
                </div>
                <div className="flex gap-x-4 items-center">
                  <p className="text-xs text-[#D00000] font-medium line-through">
                    IDR40.000
                  </p>
                  <p className="text-lg text-[#0B0909] font-medium lg:text-[22px]">
                    IDR20.000
                  </p>
                </div>
              </div>
            </div>
          </section>
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

export default DetailOrder;