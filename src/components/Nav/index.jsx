import { NavLink } from "react-router-dom"
import "./styles.css"
export const Nav = ({ display = " nav hidden md:flex gap-[30px] text-white"}) => {
    return (
        <nav className={`header__nav   ${display}   `}>
            <NavLink className={({ isActive }) => (isActive ? "active" : "item")}
                to='/service'>Услуги</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "item")}
                to='/cases'>Кейсы</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "item")}
                to='/register'>Регистрация</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "item")}
                to='/faq'>FAQ</NavLink>
        </nav>
    )
}

