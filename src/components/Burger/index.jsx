import { useState } from "react";
import burger from "../../assets/img/Header/Burger.svg";
import burger2 from "../../assets/img/Header/Burger2.svg";
import "./burger.css";
import noneburger from "../../assets/img/Header/Close.svg";
import { Nav } from "../Nav";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="BurgerMenu relative md:hidden  " >

            <div className=" group burgerbek overflow-hidden relative cursor-pointer  " >

                <img src={burger} alt="Меню" className="w-10 h-10 cursor-pointer ease-linear duration-500 transition-opacity  group-hover:opacity-100 " onClick={() => setIsOpen(!isOpen)} />
                <img
                    src={burger2}
                    className="absolute inset-0 transition-opacity   opacity-0 ease-linear duration-500 group-hover:opacity-100"
                    alt="hover"
                    onClick={() => setIsOpen(!isOpen)}

                />
            </div>
            {isOpen && (<div className="fixed inset-0  bg-opacity-50" onClick={() => setIsOpen(false)}></div>)}

            <div className={`fixed top-0 right-0 h-full  w-64 bg-[#1b1b1b] text-white z-1 transition duration-300  
              ${isOpen ? "translate-x-0" : "translate-x-full"}`} >
                <div className="burger__content px-[32px]   ">
                    <div className="burger__nav flex justify-between">
                        <button className="BurgerMenu__btn  cursor-pointer " onClick={() => setIsOpen(false)}>
                            <img src={noneburger} alt="noneburger" />
                        </button>

                    </div>

                    <nav className="burger__menu flex flex-col items-stretch space-y-4 mt-[30px] ">
                        <Nav display="flex flex-col font-[500]  text-[22px]" />

                        <div className="BurgerMenu__item   grid gap-[15px] mt-[20px] ">
                            <p className=" text-gray-400">Наши контакты:</p>
                            <a href="mailto:example@iphub.com "  >example@iphub.com</a>
                            <a href="tel:+996 508 88 08 47">+7 (888) 888 88 88</a>
                            <p>Схема проезда</p>
                        </div>

                        <div className="BurgerMenu__follow mt-[30px] ">
                            <p className=" text-gray-400">Мы в соцсетях:</p>
                            <div className="flex space-x-4 mt-[20px] gap-[22px] ">
                                <a href="https://www.facebook.com/" className="BurgerMenu__follow__us hover:text-white">Facebook</a>
                                <a href="https://www.instagram.com/#" className="BurgerMenu__follow__us hover:text-white">Instagram</a>
                            </div>
                        </div>

                        <div className="BurgerMenu__addres  text-gray-400 text-sm mt-6 grid gap-2.5 ">
                            <p>123317, г. Москва, Пресненская наб., д. 8, стр. 1, эт. 3, п. 1, оф. 10</p>
                            <p>ИНН: 7703472433</p>
                            <p>КПП: 770301001</p>
                        </div>
                    </nav>



                </div>











            </div>
        </div>
    );
}
