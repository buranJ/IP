import { useState, useEffect } from "react";
import Circle from "../../components/Button/Circle";
import arrow from "../../assets/img/Hero/Arrow 8.svg";

function HeaderService() {
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
        <section className="bisness bg-black mt-[60px]">
            <div className="container">
                <div className="bisness__content flex items-center justify-around">
                    <div className="bisness__text">
                        <h2 className="bisness__title text-white font-normal text-[24px] leading-[135%] md:text-[38px]">
                        Сопутствующие услуги
                        </h2>
                      
                    </div>

                    {showButton && (
                        <Circle>
                            Все услуги <img src={arrow} alt="Стрелка" />
                        </Circle>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeaderService;
