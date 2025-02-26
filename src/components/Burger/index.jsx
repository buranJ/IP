import { useState } from "react";
import burger from "../../assets/img/Header/Burger.png";
import noneburger from "../../assets/img/Header/close.png"
import { Nav } from "../Nav";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="BurgerMenu relative md:hidden">
            <img src={burger} alt="Меню" className="w-10 h-10 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

            {isOpen && (<div className="fixed inset-0  bg-opacity-50" onClick={() => setIsOpen(false)}></div>)}

            <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transition-transform duration-300  
      ${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>

                <button className="BurgerMenu__btn absolute top-4 left-[190px] text-white" onClick={() => setIsOpen(false)}>
                    <img src={noneburger} alt="noneburger" />
                </button>

                <nav className="BurgerMenu__nav flex flex-col p-6 space-y-4 mt-[30px] ml-[32px]">
                    <Nav />
                    <div className="BurgerMenu__item mt-6">
                        <p className="mb-2 text-gray-400">Наши контакты:</p>
                        <a href="mailto:example@iphub.com">example@iphub.com</a>
                        <a href="tel:+996 508 88 08 47">+7 (888) 888 88 88</a>
                        <p>Схема проезда</p>
                    </div>

                    <div className="BurgerMenu__follow mt-6">
                        <p className="mb-2 text-gray-400">Мы в соцсетях:</p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/" className="BurgerMenu__follow__us hover:text-white">Facebook</a>
                            <a href="https://www.instagram.com/#" className="BurgerMenu__follow__us hover:text-white">Instagram</a>
                        </div>
                    </div>

                    <div className="BurgerMenu__addres mt-6 text-gray-400 text-sm">
                        <p>123317, г. Москва, Пресненская наб., д. 8, стр. 1, эт. 3, п. 1, оф. 10</p>
                        <p>ИНН: 7703472433</p>
                        <p>КПП: 770301001</p>
                    </div>
                </nav>
            </div>
        </div>
    );
}
