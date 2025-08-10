import React from "react";
import Header from "./Header";
import { LuMoveRight } from "react-icons/lu";
import HeroImg from '../assets/hero_img.png';
import Leaf1 from '../assets/leaf_1.png';
import Leaf2 from '../assets/leaf_2.png';
import Leaf3 from '../assets/leaf_3.png';

const Hero = () => {
  return (
    <div className="container my-[30px]">
      <div className="hero-gradient rounded-[30px] py-[28px] md:py-[40px] min-h-[20vh] md:min-h-[100vh] mx-[25px] pb-[5px] md:pb-[50px]">
        <Header />
        <div className="w-[83%] md:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between my-[60px] relative">
          <div className="flex justify-center items-center md:items-baseline flex-col md:justify-left text-center md:text-left ">
            <h1 className="text-[32px] md:text-[64px] font-[900] uppercase mb-[30px] w-[320px] md:w-[420px]">Вкусная еда ждет тебя!</h1>
            <div>
            <button className="bg-black text-[10px] md:text-[16px] text-white py-[13px] md:py-[16px] px-[12px] flex items-center  gap-[8px] rounded-[15px] rounded-br-[0px] cursor-pointer font-monrope">
              Посмотреть меню <LuMoveRight />
            </button>
            </div>
          </div>
          <div className="w-full mt-[30px] md:mt-0 md:w-[50%]">
            <img src={HeroImg} alt="hero_img" className="w-[613px]" />
          </div>
          <div className='hidden md:block'>
            <img src={Leaf1} alt="leaf1" className="absolute left-[181.33px] md:left-[350px] top-0 rotate-142 w-[200px]" />
            <img src={Leaf2} alt="leaf2" className="absolute left-[325px] md:left-[422px] top-[372px] w-[200px]" />
            <img src={Leaf3} alt="leaf3" className="absolute left-[-73px] md:left-[903px] w-[200px]" />
            <img src={Leaf3} alt="leaf3" className="absolute left-[-23px] md:left-[-150px] top-[-50px] w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
