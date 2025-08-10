import React from 'react';
import Logo from '../assets/logo.png';
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
    const navItems = [
        {name: 'Меню', link: '#'},
        {name: 'Новости', link: '#'},
        {name: 'Бронирование', link: '#'},
        {name: 'О нас', link: '#'},
        {name: 'Контакты', link: '#'},
    ]
    return (
        <div className='w-[83%] md:w-[90%] mx-auto flex items-center justify-between'>
                <a href="javascript:void(0)"><img src={Logo} alt="logo" className='w-[100px] md:w-[110px]' /></a>
                <nav className='hidden md:flex items-center gap-[25px] font-monrope font-semibold'>
                    {navItems.map((item, index) => {
                        return(
                            <a key={index} href='javascript:void(0)' className='font-monrope text-[15px] opacity-85 hover:opacity-100'>{item.name}</a>
                        )
                    })}
                </nav>
                <div className='flex items-center gap-[15px]'>
                    <div className='cursor-pointer p-[4px] md:p-[8px] rounded-full border'>
                        <FaRegHeart />
                    </div>
                    <div className='cursor-pointer relative p-[4px] md:p-[8px] rounded-full border'>
                        <BsCart3 />
                        <p className='absolute right-[-10px] md:right-[-15px] top-[-5px] bg-[#FF0000] text-white py-[2px] md:py-[4px] px-[6px] md:px-[10px] text-[10px] rounded-full'>1</p>
                    </div>
                    <div className='block md:hidden text-[20px] ml-[6px]'>
                        <FaBarsStaggered />
                    </div>
                </div>
        </div>
    );
};

export default Header;