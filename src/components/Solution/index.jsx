import { useState, useEffect } from "react";

import arrow from "../../assets/img/Hero/Arrow 8.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import { Navigation } from "swiper/modules";

import obj0 from "../../assets/img/Bisness/obj0.svg";
import obj1 from "../../assets/img/Bisness/obj1.svg";
import obj2 from "../../assets/img/Bisness/obj2.svg";
import obj3 from "../../assets/img/Bisness/obj3.svg";
import obj4 from "../../assets/img/Bisness/obj4.svg";
import obj5 from "../../assets/img/Bisness/obj5.svg";
import Circle from "../Button/Circle";
import Bisness from "../Bisness";

const slides = [
    { title: "Регистрация товарного знака в Роспатенте", image: obj1 },
    { title: "Изобретения и Полезные модели", image: obj2 },
    { title: "Промышленные образцы", image: obj3 },
    { title: "Программы для ЭВМ и Базы данных", image: obj4 },
    { title: "Представление интересов, суды", image: obj5 },
    { title: "Представление интересов, суды", image: obj5 },
];

const Solution = () => {
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
        <section className="solution">
            <Bisness />
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
                        <div className="p-3 bg-black text-white shadow-lg rounded-lg w-[289px] h-[400px] mb-29 mt-25">
                            <img src={obj0} alt="strelka" className="mt-2 ml-60" />
                            <img src={slide.image} alt={slide.title} className="w-full h-40" />
                            <h3 className="mt-25 text-lg font-medium mx-auto">{slide.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {showButton && (
                <div className="flex justify-center mt-5">
                    <Circle className="more btn">
                        Все услуги <img src={arrow} alt="Стрелка" />
                    </Circle>
                </div>
            )}
        </section>
    );
};

export default Solution;
