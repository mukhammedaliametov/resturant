import React from "react";
import Logo from "../assets/logo.png";
import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";
import FooterBg from "../assets/footer_bg.jpg";

const Footer = () => {
  return (
    <div
      className=" bg-cover w-full min-h-[20vh] bg-center"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="backdrop-blur-sm bg-[#ffffff54] min-h-[20vh] ">
        <div className="container font-monrope flex flex-col items-start justify-between py-[40px] gap-[20px] px-[20px] md:px-0">
        <div className="flex flex-col gap-[10px]">
          <img src={Logo} alt="logo" />
          <div className="flex items-center gap-[20px] mt-[10px]">
            <FaTelegram />
            <FaWhatsapp />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[10px]">
          <a href="" className="text-[20px] font-bold">Наши услуги</a>
          <a href="">Цены</a>
          <a href="">Cообщить об ошибке</a>
          <a href="">Условия услуг</a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <a href="" className="text-[20px] font-bold">Наша компания</a>
          <a href="">Отчетность</a>
          <a href="">Cвяжитесь с нами</a>
          <a href="">Управление</a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <a href="" className="text-[20px] font-bold">Адрес</a>
          <a href="">
            Узбекистан, Ташкент <br /> Улица, 24
          </a>
          <a href="">+99894848844848</a>
          <a href="">info@bmgsoft.com</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
