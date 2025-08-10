import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import RussianFlag from '../assets/russia.png';
import { FaRegUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const TopHeader = () => {
    return (
        <div className='flex items-center justify-between p-[20px] container'>
            <div className='hidden md:flex items-center gap-[20px]'>
                <a href="tel: +998948330681" className='flex items-center font-rubik font-monrope gap-[8px]'><FaPhone className='text-[20px]' />+998(94)833-06-81</a>
                <a href="mailto: info@bmgsoft.com" className='flex items-center font-rubik font-monrope gap-[8px]'><CiMail className='text-[24px]' />info@bmgsoft.com</a>
            </div>
            <div className='flex items-center gap-[20px] md:hidden'>
                <a href="tel: +998948330681"><FaPhone className='text-[20px]' /></a>
                <a href="mailto: info@bmgsoft.com"><CiMail className='text-[24px]' /></a>
            </div>
            <div className='flex items-center gap-[20px]'>
                <p className='hidden md:flex items-center gap-[8px] font-rubik font-monrope cursor-pointer'><img src={RussianFlag} alt="flag" />Русский <FaAngleDown /></p>
                <p className='flex items-center gap-[8px] md:hidden font-rubik font-monrope cursor-pointer'><img src={RussianFlag} alt="flag" />Рус <FaAngleDown /></p>
                <button className='flex items-center gap-[8px] font-rubik font-monrope cursor-pointer bg-black text-white text-[14px] py-[4px] px-[10px] rounded-[10px]'><FaRegUser /> Вход в аккаунт</button>
            </div>
        </div>
    );
};

export default TopHeader;