import { NavLink } from "react-router-dom"
import "./styles.css"
export const Nav = () => {
    return (
        <nav className="header__nav  nav hidden md:flex gap-[30px] text-white ">
            <NavLink className={({ isActive }) => (isActive ? "active" : "item")}
                to='/service'>Услуги</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "item")}
                to='/cases'>Кейсы</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "item")}
                to='/register'>Register</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "item")}
                to='/faq'>FAQ</NavLink>
        </nav>
    )
}

