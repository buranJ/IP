import "./style.scss";
import logo from "../../assets/img/Header/logo.svg"
import { Nav } from "../Nav";
import { Link } from "react-router-dom";
import BurgerMenu from "../Burger";
import Elipse from "../Button/Elipse"
import Request from "../Request";
import { useState } from "react";
import close from '../../assets/img/Request/close.svg'





function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="header bg-[#1f1f1f]  flex z-2 p-[23px]" >
                <div className="container mx-auto">
                    <div className="header__content flex justify-between">
                        <Link to="/" className="header__link" >
                            <img src={logo} alt="logo" className="header__logo" />
                        </Link>
                        <div className="header__info hidden md:flex gap-5">
                            <a href="tel:+7 (888) 888 88 88 " className=" text-white text " >+7 (888) 888 88 88</a>
                            <a href="#" className="text-[#DA4533]" onClick={() => setIsOpen(true)} >  Получить консультацию</a>
                        </div>
                        <Nav className="header__list hidden md:flex gap-[30px] text-white" />
                        <BurgerMenu />
                    </div>
                </div>
            </header>
            {isOpen && (
                <div className="fixed inset-0 flex items-center z-2 justify-center bg-black/75"
                    onClick={() => setIsOpen(false)} >
                    <div
                        onClick={(e) => e.stopPropagation()}

                    >
                        <img src={close} alt="close_pic" onClick={() => setIsOpen(false)} className="transform translate-x-79 md:translate-x-98 lg:translate-x-115 lg:translate-y-13 lg:w-[28px] lg:h-[28px] w-[23px] h-[23px] translate-y-11 cursor-pointer" />
                        <Request />


                    </div>
                </div>
            )}


        </>
    )
}

export default Header