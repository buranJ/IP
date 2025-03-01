import React from "react";
import registerData from "../Register/Register.json";

function Register({ children }) {
  return (
    <>
      <section className="register bg-black">
        <div className="container">
          <div className="register__content">
            <h2 className="register__title font-second font-normal text-[24px] leading-[135%] text-white">
              Когда необходимо
            </h2>
            <div className="register__box mt-[50px] flex flex-wrap gap-[40px] justify-start sm:justify-center md:justify-start lg:justify-center xl:justify-start">
              {registerData.map((item) => (
                <div
                  key={item.id}
                  className="register__frame gap-[20px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] bg-[#1B1B1B] h-[181px] p-6 rounded-lg border border-red-500/50 text-white"
                >
                  <h4 className="font-main font-medium text-[18px] leading-[160%] text-white">
                    {item.title}
                  </h4>
                  <p className="font-main font-normal text-[16px] leading-[160%] text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
