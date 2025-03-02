import React from "react";
import Elipse from "../../components/Button/Elipse";
import obj from "../../assets/img/Prod/obj.svg";
import Register from "../Register/Register";
import Numbers from "../Numbers/Numbers";

function ProdCase() {
    return (
        <>
            <section className="bg-black min-h-screen flex items-center justify-center p-5">
                <div className="container">
                    <div className="relative bg-[#1B1B1B] flex flex-wrap md:flex-nowrap justify-between items-center text-white rounded-lg border border-red-500/30 shadow-[0_0_15px_rgba(255,77,77,0.4)] p-8 md:p-12 mx-auto max-w-screen-lg before:absolute before:inset-0 before:rounded-lg before:border before:border-red-500/60 before:shadow-[0_0_10px_rgba(255,77,77,0.6)] before:pointer-events-none">

                        <div className="max-w-lg text-left">
                            <a href="/" className="text-sm font-medium uppercase text-gray-400 tracking-wide">
                                Товарные знаки &nbsp; Дизайн
                            </a>
                            <h2 className="text-4xl font-semibold mt-3 leading-tight">
                                Регистрация товарного знака
                            </h2>
                            <p className="text-gray-400 mt-4 leading-relaxed">
                                Полный цикл регистрации обозначения в качестве товарного знака, начиная от подачи заявки, заканчивая получением Свидетельства.
                            </p>
                            <div className="mt-6">
                                <Elipse bg="red" className="px-6 py-3 text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105">
                                    Получить индивидуальную <br /> консультацию
                                </Elipse>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img src={obj} alt="3D-объект" className="max-w-xs opacity-90" />
                        </div>
                    </div>
                </div>
            </section>
            < Register />
            <Numbers />

        </>

    );
}

export default ProdCase;