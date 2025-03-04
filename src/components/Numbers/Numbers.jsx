import React from "react";

import numberData from "./Numbers.json";
import num1 from "../../assets/img/Numbers/1.svg";
import num2 from "../../assets/img/Numbers/2.svg";
import num3 from "../../assets/img/Numbers/3.svg";

const imageMap = {
  "1": num1,
  "2": num2,
  "3": num3,
};

function Numbers() {
  return (
    <section className="Numbers bg-black">
      <div className="container">
        <div className="number__content">
          <h2 className="number__title ml-[40px] font-second font-normal text-[24px] leading-[135%] text-white md:text-[38px]">
            Процесс работы
          </h2>
          <div className="number__box">
            <div className="number__brend mt-[50px] flex flex-col gap-[40px] md:ml-[10px] md:flex-row md:justify-center">
              {numberData.map((item) => (
                <div
                  key={item.step}
                  className="number__step gap-[20px] w-[370px] bg-[#1B1B1B] h-[200px] p-6 rounded-lg border border-red-500/50 text-white"
                >
                  <div className="number__img-title flex items-center gap-4">
                    <img src={imageMap[item.img]} alt={item.title} className="w-12 h-12" />
                    <p className="font-medium text-[18px] leading-[160%] text-white">
                      {item.title}
                    </p>
                  </div>
                  <p className="number__des font-medium text-[16px] text-gray-400 leading-[160%] mt-2.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
