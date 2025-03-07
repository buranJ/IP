import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../assets/img/Breadcrumbs/Arrow 9.svg"
import Batton from "../../assets/img/Breadcrumbs/Ellipse 56.svg"
import { ChevronRight } from 'lucide-react'

const Breadcrumbs = ({ bg = " bg-[#1b1b1b] " }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const patchnames = location.pathname.split("/").filter((el) => el)

    return (
        <nav className=" "  >
            <div className={`flex gap-[20px] items-center  ${bg}  `} >


                <button
                    className='flex'
                    onClick={() => navigate(-1)}
                >
                    <img src={Button} alt="" className='translate-x-4' />
                    <img src={Batton} alt="" />
                </button>
                <ul className='flex items-center ' >
                    <li>
                        <Link to="/" className='text-[#8a8a8a] ' >
                            Главная
                        </Link>
                    </li>
                    {patchnames.map((name, i) => {
                        const route = "/" + patchnames.slice(0, i + 1)
                        const last = i === patchnames.length - 1
                        return (


                            <li key={i} className="text-red-400 flex hover:underline cursor-pointer items-center " >
                                <ChevronRight className=' text-[#8a8a8a] ' />
                                {last ? (
                                    <span> {decodeURIComponent(name)} </span>
                                ) : (
                                    <Link to={route} >
                                        {decodeURIComponent(name)}
                                    </Link>
                                )
                                }
                            </li >
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}


export default Breadcrumbs;
