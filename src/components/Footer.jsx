import React from 'react';
import Logo from '../assets/logo.png';
import { FaFacebook, FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import FooterBg from '../assets/footer_bg.jpg';

const Footer = () => {
    return (
        <div className='min-h-screen bg-cover w-full' style={{ backgroundImage: `url(${FooterBg})`}}>
            <div className='bg-gradient h-[50px]'>
                <div>
                    <img src={Logo} alt="logo" />
                    <div>
                        <FaTelegram />
                        <FaWhatsapp />
                        <FaInstagram />
                        <FaFacebook />
                    </div>
                </div>
                <div>
                    <a href="">Наши услуги</a>
                    <a href="">Цены</a>
                    <a href="">Cообщить об ошибке</a>
                    <a href="">Условия услуг</a>
                </div>
                <div>
                    <a href="">Наша компания</a>
                    <a href="">Отчетность</a>
                    <a href="">Cвяжитесь с нами</a>
                    <a href="">Управление</a>
                </div>
                <div>
                    <a href="">Адрес</a>
                    <a href="">Узбекистан, Ташкент <br /> Улица, 24</a>
                    <a href="">+99894848844848</a>
                    <a href="">info@bmgsoft.com</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;