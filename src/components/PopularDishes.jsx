import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Food1 from "../assets/food1.png";
import Food2 from "../assets/food2.png";
import Food3 from "../assets/food3.png";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Button from "./Button";
import Leaf2 from "../assets/leaf_2.png";
import Leaf3 from "../assets/leaf_3.png";

const PopularDishes = () => {
  return (
    <div className="container pt-[20px] px-[20px]">
      <h2 className="section-title mb-[120px]">Популярные блюда</h2>
      <div className="flex items-center justify-between gap-[20px]">
        <div>
          <FaChevronLeft className="text-[10px] md:text-[30px]" />
        </div>
        <div className="flex items-center justify-around gap-[10px] md:gap-[40px]">
          <div className="hero-gradient py-[30px] px-[14px] md:px-[20px] rounded-[38px] w-[241px] opacity-100 md:opacity-75">
            <img src={Food1} alt="food1" className="mt-[-120px]" />
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-monrope font-semibold">
                Chicken soup
              </p>
              <FaRegHeart className="text-[20px]" />
            </div>
            <p className="text-[13px] font-monrope mt-[10px]">
              Spicy with garlic
            </p>
            <div className="flex items-bottom justify-between">
              <p className="font-bold font-monrope text-[20px] mt-[10px]">
                $10.00
              </p>
              <div className="rounded-[5px] bg-black p-[10px] cursor-pointer">
                <BsCart3 className="text-white text-[20px] font-semibold " />
              </div>
            </div>
          </div>
          <div className="hidden md:block hero-gradient py-[30px] px-[20px] rounded-[38px] w-[263px]">
            <img src={Food2} alt="food1" className="mt-[-120px]" />
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-monrope font-semibold">
                Chicken soup
              </p>
              <FaRegHeart className="text-[20px]" />
            </div>
            <p className="text-[13px] font-monrope mt-[10px]">
              Spicy with garlic
            </p>
            <div className="flex items-bottom justify-between">
              <p className="font-bold font-monrope text-[20px] mt-[10px]">
                $10.00
              </p>
              <div className="rounded-[5px] bg-black p-[10px] cursor-pointer">
                <BsCart3 className="text-white text-[20px] font-semibold " />
              </div>
            </div>
          </div>
          <div className="hidden md:block hero-gradient py-[30px] px-[20px] rounded-[38px] w-[263px]">
            <img src={Food3} alt="food1" className="w-[210px] mt-[-100px]" />
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-monrope font-semibold">
                Chicken soup
              </p>
              <FaRegHeart className="text-[20px]" />
            </div>
            <p className="text-[13px] font-monrope mt-[10px]">
              Spicy with garlic
            </p>
            <div className="flex items-bottom justify-between">
              <p className="font-bold font-monrope text-[20px] mt-[10px]">
                $10.00
              </p>
              <div className="rounded-[5px] bg-black p-[10px] cursor-pointer">
                <BsCart3 className="text-white text-[20px] font-semibold " />
              </div>
            </div>
          </div>
          <div className="hidden md:block hero-gradient py-[30px] px-[14px] md:px-[20px] rounded-[38px] w-[241px] opacity-75">
            <img src={Food1} alt="food1" className="mt-[-120px]" />
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-monrope font-semibold">
                Chicken soup
              </p>
              <FaRegHeart className="text-[20px]" />
            </div>
            <p className="text-[13px] font-monrope mt-[10px]">
              Spicy with garlic
            </p>
            <div className="flex items-bottom justify-between">
              <p className="font-bold font-monrope text-[20px] mt-[10px]">
                $10.00
              </p>
              <div className="rounded-[5px] bg-black p-[10px] cursor-pointer">
                <BsCart3 className="text-white text-[20px] font-semibold " />
              </div>
            </div>
          </div>
        </div>
        <div>
          <FaChevronRight className="text-[10px] md:text-[30px]" />
        </div>
      </div>
      <div className="w-full flex justify-end mt-[50px]">
        <Button name="Посмотреть меню" />
      </div>
      <div className="hidden md:block">
        <img src={Leaf2} alt="leaf2" className="absolute w-[150px] top-[932px] left-[1164px] rotate-66" />
        <img src={Leaf3} alt="leaf3" className="absolute w-[150px] top-[1200px] left-0" />
      </div>
    </div>
  );
};

export default PopularDishes;
