import React from "react";
import FormIcon from "../assets/form_icon.svg";
import Button from "./Button";
import Pizza from "../assets/pizza.png";
import Leaf1 from '../assets/leaf_1.png';

const BookTable = () => {
  return (
    <div className="container flex items-center justify-between px-[20px] pt-[50px] md:mt-0">
      <div className="relative bg-[#A7A3A3] px-[20px] md:px-[30px] py-[40px] rounded-[20px] flex flex-col w-[463px]">
        <div className="absolute bg-[#A7A3A3] top-[-40px] rounded-full p-[6px]">
          <div className="rounded-full p-[22px] bg-black flex items-center justify-center">
            <img src={FormIcon} alt="form_icon" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <h3 className="text-center text-[25px] md:text-[35px] font-bold mt-[20px] mb-[20px]">
          Забронировать стол
        </h3>
        <form className="flex flex-col gap-[15px] font-monrope">
          <input
            type="number"
            placeholder="Ваш номер"
            className=" border-b px-4 py-2 outline-none focus:border-black"
          />
          <select className=" border-b px-4 py-2 outline-none focus:border-black">
            <option value="">На сколько человек?</option>
            <option value="1">1 человек</option>
            <option value="2">2 человека</option>
            <option value="3">3 человека</option>
            <option value="4">4 человека</option>
            <option value="5">5+ человек</option>
          </select>
          <input
            type="date"
            className=" border-b px-4 py-2 outline-none focus:border-black"
          />
          <input
            type="time"
            className=" border-b px-4 py-2 outline-none focus:border-black"
          />
          <select className=" border-b px-4 py-2 outline-none focus:border-black">
            <option value="">Выберите место</option>
            <option value="main">Главный зал</option>
            <option value="terrace">Терраса</option>
            <option value="vip">VIP комната</option>
          </select>
          <a href="#" className="text-[#060048] text-sm">
            Выбрать места на карте
          </a>
          <div>
            <Button name="Забронировать" className="mt-[10px]" />
          </div>
        </form>
      </div>
      <div className="hidden md:block relative right-[-5%]">
        <img src={Pizza} alt="pizza" />
      </div>
      <div>
        <img src={Leaf1} alt="leaf1" className="absolute w-[250px] left-[532px] top-[1437px] rotation-114" />
        <img src={Leaf1} alt="leaf1" className="absolute w-[250px] left-[663px] top-[2021px] rotation-129" />
      </div>
    </div>
  );
};

export default BookTable;
