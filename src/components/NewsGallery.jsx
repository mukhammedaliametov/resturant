import React from "react";
import News1 from "../assets/news1.png";
import News2 from "../assets/news2.png";
import News3 from "../assets/news3.png";
import Avatar from "../assets/sergey.svg";

const NewsGallery = () => {
  const news = [{ img: News1}, {img: News2}, {img: News3 }];
  return (
    <div className="container pt-[20px] md:pt-[50px] px-[20px] md:px-0">
      <h2 className="section-title">Новости/Галерея</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] items-center mt-[140px]">
        {news.map((item, index) => {
          return (
            <div key={index} className="hero-gradient w-[360px] px-[20px] py-[30px] rounded-[30px] font-monrope mb-[90px] md:mt-0">
              <img src={item.img} alt="img" className="rounded-[30px] mt-[-100px]" />
              <p className="py-[10px]">
                Используйте гибкие структуры, чтобы предоставить надежный обзор
                для обзоров высокого уровня. Итеративные подходы к данным
                корпоративной.
              </p>
              <div className="flex items-center gap-[10px]">
                <img src={Avatar} alt="sergey" className="w-[40px]" />
                <p className="font-bold">Сергей</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsGallery;
