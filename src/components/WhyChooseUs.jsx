import { FaMugHot, FaCarSide, FaPizzaSlice, FaHome, FaUserTie, FaConciergeBell } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="pt-[20px] text-center">
      <div className="max-w-[1224px] mx-auto px-[20px] md:px-0">
        <h2 className="section-title mb-[50px]">Почему именно мы?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left font-monrope">
          <div className="flex flex-col items-start gap-4">
            <FaMugHot className="text-4xl text-black" />
            <div>
              <h3 className="text-[22px] font-bold">Качественные продукты</h3>
              <p className="text-[16px]">
                Входные билеты в музеи, для посещения достопримечательностей, памятников.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FaCarSide className="text-4xl text-black" />
            <div>
              <h3 className="text-[22px] font-bold">Быстрая доставка</h3>
              <p className="text-[16px]">
                Входные билеты в музеи, для посещения достопримечательностей, памятников.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FaPizzaSlice className="text-4xl text-black" />
            <div>
              <h3 className="text-[22px] font-bold">Вкусные рецепты</h3>
              <p className="text-[16px]">
                Входные билеты в музеи, для посещения достопримечательностей, памятников.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FaHome className="text-4xl text-black" />
            <div>
              <h3 className="text-[22px] font-bold">Уютная атмосфера</h3>
              <p className="text-[16px]">
                Входные билеты в музеи, для посещения достопримечательностей, памятников.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FaUserTie className="text-4xl text-black" />
            <div>
              <h3 className="text-[22px] font-bold">Опытные повара</h3>
              <p className="text-[16px]">
                Входные билеты в музеи, для посещения достопримечательностей, памятников.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <FaConciergeBell className="text-4xl text-black" />
            <div>
              <h3 className="text-[22px] font-bold">Обслуживание</h3>
              <p className="text-[16px]">
                Входные билеты в музеи, для посещения достопримечательностей, памятников.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
