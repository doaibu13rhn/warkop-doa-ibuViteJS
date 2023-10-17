import { useEffect, useState } from "react";
import axios from "axios";
import getImageUrl from "../../utils/imageGetter";

import "../../style/style.css";
// import NavbarLogin from "../../components/NavbarLogin";
import DropdownMobile from "../../components/DropdownMobile";
import Footer from "../../components/Footer";
import PromoCard from "../../components/PromoCard";
import Navbar from "../../components/Navbar";

function Product() {

  const [isDropdownShown, setIsDropdownShow] = useState(false);

  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)}></Navbar>
      <header className="hidden md:w-full md:h-[305px] md:bg-[url('/src/assets/images/product-hero.png')] md:flex md:items-center md:px-24 lg:px-[130px]">
        <h1 className="font-plusJakartaSans text-5xl font-medium w-[80%] text-light leading-tight">
          We Provide Good Coffee and Healthy Meals
        </h1>
      </header>
      <section>
        <div className="font-plusJakartaSans py-6 px-5 md:pt-12 md:pb-6 md:px-24 lg:px-[127px] flex justify-between items-center">
          <h1 className="text-2xl md:text-5xl font-medium text-[#0B0909]">
            Today <span className="text-[#8E6447]">Promo</span>
          </h1>
          <div className="hidden md:flex gap-x-3">
            <button type="button">
              <img
                src={getImageUrl("arrow-left-gr", "png")}
                alt="arrow-left"
                className="w-full h-full"
              />
            </button>
            <button type="button">
              <img
                src={getImageUrl("arrow-right", "png")}
                alt="arrow-right"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
        <div
          className="w-full md:pt-6 md:pb-8 flex gap-x-12 overflow-x-scroll no-scrollbar"
          id="promo-card"
        >
          <PromoCard name="kupon-ijo" />
          <PromoCard name="kupon-ijo" />
          <PromoCard name="kupon-ijo" />
          <PromoCard name="kupon-ijo" />
          <PromoCard name="kupon-ijo" />
          <PromoCard name="kupon-ijo" />
        </div>
        <div className="pt-8 px-5 md:px-24 lg:px-[127px]">
          <img
            src={getImageUrl("carousel", "png")}
            alt="carousel"
            className="w-[76px] h-full"
          />
        </div>
      </section>
      <section className="font-plusJakartaSans py-6 px-5 md:pt-12 md:pb-6 md:px-24 lg:px-[127px]">
        <h1 className="text-2xl md:text-5xl font-medium text-[#0B0909]">
          Our <span className="text-[#8E6447]">Product</span>
        </h1>
      </section>
      <main className="font-plusJakartaSans px-5 md:pb-6 md:px-24 lg:px-[127px] flex flex-col lg:flex-row justify-between gap-x-5">
        <div className="flex justify-between items-center pb-6 relative lg:hidden">
          <input
            type="text"
            placeholder="Find Product"
            className="w-[80%] border border-[#DEDEDE] rounded-md py-3.5 px-10 text-xs text-[#4F5665] font-normal tracking-wider outline-none focus:border focus:border-primary"
          />
          <div className="absolute top-3.5 left-4 md:top-3.5 md:left-4">
            <img
              src={getImageUrl("Search", "png")}
              alt="Search-product"
              className="w-full h-full"
            />
          </div>
          <button className="bg-primary p-4 rounded">
            <img
              src={getImageUrl("Filter", "png")}
              alt="sorting-menu"
              className="w-auto flex items-center"
            />
          </button>
        </div>
        <section className="xl:w-2/6 hidden lg:flex flex-col h-full gap-y-4 bg-[#0B0909] text-light py-[34px] px-[30px] rounded-2xl">
          <div className="flex justify-between">
            <span className="text-[22px] font-semibold">Filter</span>
            <span className="text-[18px] font-bold">Reset Filter</span>
          </div>
          <div className="flex flex-col gap-y-3.5">
            <span className="text-lg font-bold">Search</span>
            <input
              type="text"
              placeholder="Search Your Product"
              className="py-4 px-5 text-normal font-normal text-[#696F79] rounded tracking-wider outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-lg font-bold">Category</span>
            <div className="flex flex-col gap-y-4 text-lg font-normal">
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="favorite-product"
                  checked
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="favorite-product">Favorite Product</label>
              </div>
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="coffee"
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="coffee">Coffee</label>
              </div>
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="non-coffee"
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="non-coffee">Non Coffee</label>
              </div>
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="foods"
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="foods">Foods</label>
              </div>
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="add-on"
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="add-on">Add-On</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-lg font-bold">Sort By</span>
            <div className="flex flex-col gap-y-4 text-lg font-normal">
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="buy-one-get-one"
                  checked
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="buy-one-get-one">Buy 1 get 1</label>
              </div>
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="flashsale"
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="flashsale">Flash sale</label>
              </div>
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="birthday-package"
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="birthday-package">Birthday Package</label>
              </div>
              <div className="flex gap-3.5 items-center">
                <input
                  type="checkbox"
                  id="cheap"
                  className="appearance-none w-[24px] h-[24px] bg-none border border-[#a0a3bd] rounded-lg flex items-center justify-center after:font-awesome after:content-['\f00c'] after:font-black after:text-normal after:text-[#0b0909] after:hidden checked:bg-primary checked:border-none checked:after:block"
                />
                <label htmlFor="cheap">Cheap</label>
              </div>
            </div>
          </div>
          <div className="range">
            <span className="text-lg font-bold">Range Price</span>
            <div className="h-2 bg-light rounded mt-5">
              <div className="h-2 absolute left-[18%] right-[70%] rounded bg-primary"></div>
            </div>
            <div className="relative">
              <input
                type="range"
                className="w-full h-[8px] pointer-events-none absolute top-[-8px] appearance-none rounded"
                min="0"
                max="10000"
              />
              <input
                type="range"
                className="w-full h-[8px] pointer-events-none absolute top-[-8px] appearance-none rounded"
                min="10000"
                max="20000"
              />
            </div>
          </div>
          <div className="text-sm font-medium text-[#0B0909] py-3 px-4 bg-primary text-center rounded-md hover:bg-amber-600 active:ring active:ring-orange-300 mt-4">
            <button>Apply Filter</button>
          </div>
        </section>
        <section className="xl:w-4/6">
        <div className="w-full grid grid-cols-1 md:grid-cols-product md:gap-x-5">
          <div className="flex flex-col items-center">
            <img
              src={getImageUrl("product-1", "png")}
              alt="product"
              className="w-full h-full"
            />
            <div
              className="w-[95%] flex flex-col gap-y-3 p-[10px] bg-light drop-shadow-md relative bottom-10 xl:bottom-14"
            >
              <span className="text-xl font-medium text-dark lg:text-[22px]"
                >Hazelnut Latte</span
              >
              <p className="text-sm font-normal text-dark">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="text-lg font-medium text-dark lg:text-[22px]">
                IDR 20.000
              </p>
              <div
                className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2"
              >
                <button
                  type="button"
                  className="text-base font-medium text-dark bg-primary p-2 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300 md:w-3/4"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="text-base font-medium border-2 border-primary text-dark bg-light p-2 rounded-md hover:bg-slate-200 active:ring active:ring-orange-300 flex justify-center items-center md:w-1/4"
                >
                  <div>
                    <img
                      src={getImageUrl("ShoppingCart-yellow", "png")}
                      alt="cart"
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={getImageUrl("product-2", "png")}
              alt="product"
              className="w-full h-full"
            />
            <div
              className="w-[95%] flex flex-col gap-y-3 p-[10px] bg-light drop-shadow-md relative bottom-10 xl:bottom-14"
            >
              <span className="text-xl font-medium text-dark lg:text-[22px]"
                >Hazelnut Latte</span
              >
              <p className="text-sm font-normal text-dark">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="text-lg font-medium text-dark lg:text-[22px]">
                IDR 20.000
              </p>
              <div
                className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2"
              >
                <button
                  type="button"
                  className="text-base font-medium text-dark bg-primary p-2 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300 md:w-3/4"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="text-base font-medium border-2 border-primary text-dark bg-light p-2 rounded-md hover:bg-slate-200 active:ring active:ring-orange-300 flex justify-center items-center md:w-1/4"
                >
                  <div>
                    <img
                      src={getImageUrl("ShoppingCart-yellow", "png")}
                      alt="cart"
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={getImageUrl("product-4", "png")}
              alt="product"
              className="w-full h-full"
            />
            <div
              className="w-[95%] flex flex-col gap-y-3 p-[10px] bg-light drop-shadow-md relative bottom-10 xl:bottom-14"
            >
              <span className="text-xl font-medium text-dark lg:text-[22px]"
                >Hazelnut Latte</span
              >
              <p className="text-sm font-normal text-dark">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="text-lg font-medium text-dark lg:text-[22px]">
                IDR 20.000
              </p>
              <div
                className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2"
              >
                <button
                  type="button"
                  className="text-base font-medium text-dark bg-primary p-2 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300 md:w-3/4"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="text-base font-medium border-2 border-primary text-dark bg-light p-2 rounded-md hover:bg-slate-200 active:ring active:ring-orange-300 flex justify-center items-center md:w-1/4"
                >
                  <div>
                    <img
                       src={getImageUrl("ShoppingCart-yellow", "png")}
                      alt="cart"
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={getImageUrl("product-3", "png")}
              alt="product"
              className="w-full h-full"
            />
            <div
              className="w-[95%] flex flex-col gap-y-3 p-[10px] bg-light drop-shadow-md relative bottom-10 xl:bottom-14"
            >
              <span className="text-xl font-medium text-dark lg:text-[22px]"
                >Hazelnut Latte</span
              >
              <p className="text-sm font-normal text-dark">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="text-lg font-medium text-dark lg:text-[22px]">
                IDR 20.000
              </p>
              <div
                className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2"
              >
                <button
                  type="button"
                  className="text-base font-medium text-dark bg-primary p-2 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300 md:w-3/4"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="text-base font-medium border-2 border-primary text-dark bg-light p-2 rounded-md hover:bg-slate-200 active:ring active:ring-orange-300 flex justify-center items-center md:w-1/4"
                >
                  <div>
                    <img
                       src={getImageUrl("ShoppingCart-yellow", "png")}
                      alt="cart"
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={getImageUrl("product-1", "png")}
              alt="product"
              className="w-full h-full"
            />
            <div
              className="w-[95%] flex flex-col gap-y-3 p-[10px] bg-light drop-shadow-md relative bottom-10 xl:bottom-14"
            >
              <span className="text-xl font-medium text-dark lg:text-[22px]"
                >Hazelnut Latte</span
              >
              <p className="text-sm font-normal text-dark">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="text-lg font-medium text-dark lg:text-[22px]">
                IDR 20.000
              </p>
              <div
                className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2"
              >
                <button
                  type="button"
                  className="text-base font-medium text-dark bg-primary p-2 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300 md:w-3/4"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="text-base font-medium border-2 border-primary text-dark bg-light p-2 rounded-md hover:bg-slate-200 active:ring active:ring-orange-300 flex justify-center items-center md:w-1/4"
                >
                  <div>
                    <img
                      src={getImageUrl("ShoppingCart-yellow", "png")}
                      alt="cart"
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={getImageUrl("product-2", "png")}
              alt="product"
              className="w-full h-full"
            />
            <div
              className="w-[95%] flex flex-col gap-y-3 p-[10px] bg-light drop-shadow-md relative bottom-10 xl:bottom-14"
            >
              <span className="text-xl font-medium text-dark lg:text-[22px]"
                >Hazelnut Latte</span
              >
              <p className="text-sm font-normal text-dark">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="text-lg font-medium text-dark lg:text-[22px]">
                IDR 20.000
              </p>
              <div
                className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2"
              >
                <button
                  type="button"
                  className="text-base font-medium text-dark bg-primary p-2 rounded-md hover:bg-amber-600 active:ring active:ring-orange-300 md:w-3/4"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="text-base font-medium border-2 border-primary text-dark bg-light p-2 rounded-md hover:bg-slate-200 active:ring active:ring-orange-300 flex justify-center items-center md:w-1/4"
                >
                  <div>
                    <img
                       src={getImageUrl("ShoppingCart-yellow", "png")}
                      alt="cart"
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-center gap-x-4">
            <img
              src={getImageUrl("page-1", "png")}
              alt="page-1"
              className="w-10 h-10"
            />
            <img
              src={getImageUrl("page-2", "png")}
              alt="page-2"
              className="w-10 h-10"
            />
            <img
              src={getImageUrl("page-3", "png")}
              alt="page-3"
              className="w-10 h-10"
            />
            <img
              src={getImageUrl("page-4", "png")}
              alt="page-4"
              className="w-10 h-10"
            />
            <img
              src={getImageUrl("arrow-right", "png")}
              alt="arrow-right"
              className="w-10 h-10"
            />
          </div>
        </section>
      </main>
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
      <Footer />
    </>
  );
}

export default Product;