import React from 'react'
import "./style.css"
import "./_vars.scss"
import Button from "../MiniBtns"
import pic_1 from "../../assets/img/Company/circle_main.svg"
import pic_2 from "../../assets/img/Company/circle_2svg.svg"
import pic_3 from "../../assets/img/Company/pic_2.svg"
import pic_4 from "../../assets/img/Company/pic_3.svg"
import pic_5 from "../../assets/img/Company/pic_4.svg"
import pic_6 from "../../assets/img/Company/pic_5.svg"





const Company = () => {
    return (
        <div>
            <section className="company mt-40 text-white ">
                <div className="container mx-auto px-[20px] ">
                    <div className="content  ">
                        <div className="text   text-center  lg:max-w-[1216px] lg:flex  lg:justify-between  lg:text-start  lg:py-[40px] lg:pr-[90px] lg:pl-[40px]       items-center max-w-[290px]  px-[20px] pt-[20px] pb-[15px] rounded-[10px] bg-[#1f1f1f]   p-6   border border-[#DA4533] shadow-[0_0_11px_rgba(255,0,0,0.5)]     ">
                            <div className='  ' >

                                <p className=' font-[400] text-[12px] lg:text-[14px] opacity-80 ' >Товарные знаки</p>
                                <h2 className=' w-full font-[400] text-[24px] mt-[6px] lg:w-[764px] lg:text-[38px] ' > Регистрация товарного знака для компании CIRKLE </h2>
                                <p className='  w-full font-[400] text-[14px] lg:text-[16px]  mt-[12px] text-[#8A8A8A] ' >Был зарегистрирован товарный знак в отношении косметических товаров</p>
                            </div>
                            <div>

                                <img src={pic_1} alt="pic-1" className=' hidden lg:block  ' />
                            </div>
                        </div>


                        <div className=' body__content lg:flex lg:items-center lg:justify-between  ' >
                            <div>


                                <img src={pic_4} alt="pic_3" className='hidden lg:block pic_2 ' />
                            </div>
                            <div className=' lg:max-w-[701px] lg:mt-[50px] ' >


                                <div className="body mt-[35px] ">
                                    <h2 className=" lg:text-[24px]     relative inline-block text-white text-[16px] font-medium after:content-[''] after:block after:mt-[5px] after:h-[1.5px] after:w-[186px] after:bg-gradient-to-r after:from-[#DA4533] after:to-transparent ">О компании</h2>
                                    <p className=' lg:text-[16px]  font-[400] text-[14px] text-[#8a8a8a] mt-[14px] ' >CIRKLE – магазин косметических товаров и производитель продукции.</p>
                                    <img src={pic_2} alt="pic" className=' lg:w-full   mt-[14px] pic_2 ' />
                                </div>
                                <div className="zadachi mt-[35px] lg:mt-[50px]  ">
                                    <h2 className=" lg:text-[24px]   relative inline-block text-white font-[500] text-[16px]  after:content-[''] after:block after:mt-[5px] after:h-[1.5px] after:w-[186px] after:bg-gradient-to-r after:from-[#DA4533] after:to-transparent ">Задачи</h2>
                                    <ol type='1' className=' lg:w-[701px] lg:leading-[160%] lg:text-[16px]   mt-[14px] leading-[165%] text-[#8a8a8a] font-[400] text-[14px] '  >
                                        <li>Подготовка и подача заявки для регистрации товарного знака.
                                        </li>
                                        <li>Подготовка ответа на уведомление для снятия доводов для отказа в регистрации товарного знака.
                                        </li>
                                        <li>Получение Свидетельства на товарный.
                                        </li>
                                    </ol>
                                    <div className='lg:flex lg:w-full lg:mt-[16px] lg:justify-between ' >

                                        <img src={pic_3} alt="pic_3" className='mt-[14px] lg:mt-0  pic_2 lg:w-[360px] ' />
                                        <img src={pic_6} alt="pic_6" className='hidden lg:block pic_2 lg:w-[340px] ' />
                                    </div>
                                    <Button />
                                </div>

                                <img src={pic_4} alt="pic_4" className=' mt-[25px] pic_2 lg:hidden ' />


                                <div className="reshenie mt-[35px] lg:mt-[50px]  ">
                                    <h2 className=" lg:text-[24px]    relative inline-block text-white font-[500] text-[16px]  after:content-[''] after:block after:mt-[5px] after:h-[1.5px] after:w-[186px] after:bg-gradient-to-r after:from-[#DA4533] after:to-transparent ">Решение</h2>
                                    <p className=' lg:text-[16px] lg:w-[701px] lg:leading-[160%]     mt-[14px] text-[#8a8a8a] font-[400] text-[14px] leading-[165%] w-full ' >По оценке экспертизы выявлено основание для отказа, так как были противопоставлены 7 товарных знаков, которые были признаны сходными до степени смешения.<br /><br />
                                        Нами было доказано, что у потребителя не возникнет смешения брендов, так как деятельность заявителя и правообладателей знаков не пересекается и относится к другим сферам.<br /><br />
                                        Товарный знак был зарегистрированы в отношении косметических товаров и услуг магазина косметики.</p>
                                </div>
                                <div className="result mt-[35px] lg:mt-[50px] ">
                                    <h2 className="lg:text-[24px]    relative inline-block text-white font-[500] text-[16px]  after:content-[''] after:block after:mt-[5px] after:h-[1.5px] after:w-[186px] after:bg-gradient-to-r after:from-[#DA4533] after:to-transparent " >Результат</h2>
                                    <ol className='lg:text-[16px]    mt-[14px] font-[400] text-[14px] text-[#8a8a8a] leading-[165%] ' >
                                        <li>Успешная регистрация товарного знака за 10 месяцев.
                                        </li>
                                        <li>Номер заявки — 2020702165.
                                        </li>
                                        <li>Номер государственной регистрации — 787439.</li>
                                    </ol>
                                    <div className='lg:flex  lg:w-full lg:mt-[16px]  ' >
                                        <img src={pic_5} alt="pic_5" className=' mt-[14px] lg:mt-0  pic_2 lg:w-[340px]  ' />
                                        <img src={pic_5} alt="pic_5" className=' mt-[14px] lg:mt-0 pic_2 hidden lg:w-[340px] lg:block  ' />
                                    </div>
                                    <Button />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </div >
    )
}

export default Company;
