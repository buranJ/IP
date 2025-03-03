import { useState, useEffect } from "react";
import Circle from "../Button/Circle";
import arrow from "../../assets/img/Hero/Arrow 8.svg";

function Bisness() {
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowButton(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="bisness bg-white mt-[60px]">
            <div className="container">
                <div className="bisness__content flex items-center justify-around">
                    <div className="bisness__text">
                        <h2 className="bisness__title font-normal text-[24px] leading-[135%] text-[var(--blackbackground)] md:text-[38px]">
                            Решения для вашего бизнеса
                        </h2>
                        <p className="bisness__des font-medium text-[14px] leading-[160%] text-[var(--grey)] mt-[12px]">
                            У нас есть все необходимые ресурсы для решения любых ваших потребностей <br />
                            в сфере интеллектуальной собственности
                        </p>
                    </div>

                    {showButton && (
                        <Circle>
                           <p>Все услуги</p><img src={arrow} className="group-hover:transform group-hover:translate-x-10 duration-500 transform translate-x-7 " alt="Стрелка" />
                        </Circle>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Bisness;
