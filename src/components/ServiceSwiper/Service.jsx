import { useState, useEffect } from "react";

import arrow from "../../assets/img/Hero/Arrow 8.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import { Navigation } from "swiper/modules";

import obj0 from "../../assets/img/Bisness/obj0.svg";
import foto1 from "../../assets/img/ServiceSwiper/object1.svg"
import foto2 from "../../assets/img/ServiceSwiper/object2.svg"
import foto3 from "../../assets/img/ServiceSwiper/object3.svg"
import foto4 from "../../assets/img/ServiceSwiper/object4.svg"
import foto5 from "../../assets/img/ServiceSwiper/object5.svg"

import Circle from "../Button/Circle";
import HeaderService from "../HeaderService/HeaderService";
import { object } from "prop-types";

const slides = [
    { title: "Регистрация товарного знака", image: foto1 },
    { title: "Международная регистрация ", image: foto2 },
    { title: "Продление товарного знака", image: foto3 },
    { title: "Изменение сведений в товарном знаке", image: foto4 },
    { title: "Получение дубликата свидетельства", image: foto5 },
    { title: "Регистрация товарного знака", image: foto1 },
    { title: "Международная регистрация ", image: foto2 },
    { title: "Продление товарного знака", image: foto3 },
    { title: "Изменение сведений в товарном знаке", image: foto4 },
    { title: "Получение дубликата свидетельства", image: foto5 },

];

const ServiceSwiper = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowButton(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="solution bg-black">
            <HeaderService />
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={5}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    300: { slidesPerView: 1, spaceBetween: 25 },
                    400: { slidesPerView: 1, spaceBetween: 20 },
                    500: { slidesPerView: 1, spaceBetween: 25 },
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 25 },
                    900: { slidesPerView: 3, spaceBetween: 25 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                    1280: { slidesPerView: 4, spaceBetween: 35 },
                    1536: { slidesPerView: 5, spaceBetween: 40 },
                }}
                className="w-full margin-[15px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-3 bg-[#1B1B1B] text-white shadow-lg rounded-lg w-[289px] h-[400px] mb-29 mt-25">
                            <div className="buttons flex justify-between">
                                <a href="Товарные знаки" className="buttons">
                                    <button className="px-[10px] py-[5px] text-[14px] bg-white-500">Товарные знаки</button>
                                </a>
                                <a href="Дизайн" className="buttons">
                                    <button className="px-[10px] py-[5px] text-[14px]">Дизайн</button>
                                </a>
                                <img src={obj0} alt="strelka" className="" />

                            </div>
                            <img src={slide.image} alt={slide.title} className="w-full h-40 mt-5" />
                            <h3 className="mt-25 text-lg font-medium mx-auto">{slide.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {showButton && (
                <div className="flex justify-center bg-black">
                    <Circle className="more btn">
                        Все услуги <img src={arrow} alt="Стрелка" />
                    </Circle>
                </div>
            )}
        </section>
    );
};

export default ServiceSwiper;
