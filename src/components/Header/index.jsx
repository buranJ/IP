import "./style.scss";
import logo from "../../assets/img/Header/logo.svg"
import { Nav } from "../Nav";
import { Link } from "react-router-dom";
import BurgerMenu from "../Burger";



function Header() {
    return (
        <header className="header bg-[#1B1B1B] p-[23px]" >
            <div className="container mx-auto">
                <div className="header__content flex justify-between">
                    <Link to="/" className="header__link" >
                        <img src={logo} alt="logo" className="header__logo" />
                    </Link>
                    <div className="header__info hidden md:flex gap-5">
                        <a href="tel:+7 (888) 888 88 88 " className=" text-white text " >+7 (888) 888 88 88</a>
                        <a href="#" className="text-[#DA4533]" >Получить консультацию</a>
                    </div>
                    <Nav className="header__list hidden md:flex gap-[30px] text-white" />
                    <BurgerMenu />
                </div>
            </div>
        </header>
    )
}

export default Header