import React from "react";
import { LuMoveRight } from "react-icons/lu";

const Button = (props) => {
  return (
    <button className="bg-black text-[10px] md:text-[16px] text-white py-[13px] md:py-[16px] px-[12px] flex items-center  gap-[8px] rounded-[15px] rounded-br-[0px] cursor-pointer font-monrope">
      {props.name} <LuMoveRight />
    </button>
  );
};

export default Button;
