import './index.scss'
import img1 from '../../assets/img/Experts/expert__photo1.svg'
import img2 from '../../assets/img/Experts/expert__photo2.svg'
import img3 from '../../assets/img/Experts/expert__photo3.svg'
import img4 from '../../assets/img/Experts/expert__photo4.svg'
import img5 from '../../assets/img/Experts/expert__photo5.svg'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import MiniButtons from '../MiniBtns'
import photo1 from '../../assets/img/Experts/photo__circle1.svg';
import photo2 from '../../assets/img/Experts/photo__circle2.svg';
import BigCircles from '../Button/BigCircle'
import BackGroundImg from '../../assets/img/overall__background.svg'
import OurExperts from '../OurExperts'


function Experts() {
    const expertsData = [
        {
            id: 1,
            img: img1,
            name: "Раймм Лидия Вячеславовна",
            position: "Генеральный директор IPhub",
        },
        {
            id: 2,
            img: img2,
            name: "Золотов Геннадий Борисович",
            position: "Руководитель отдела патентно-юридического делопроизводства",
        },
        {
            id: 3,
            img: img3,
            name: "Осоргина Екатерина Александровна",
            position: "Патентный поверенный РФ",
        },
        {
            id: 4,
            img: img4,
            name: "Рачеева Юлия Геннадьевна",
            position: "Патентный поверенный РФ",
        },
        {
            id: 5,
            img: img5,
            name: "Пахоменко Алина Аликовна",
            position: "Адвокат",
        }
    ]
    const forumsData = [
        {
            id: 1,
            category: "Будущие",
            img: photo1,
            name: "Раймм Лидия Вячеславовна",
            position: "Генеральный директор IPhub",
            place: 'Менторская гостинная',
            des: 'Индивидуальная 30-ти минутная сессия с разбором вашего кейса.',
            date: '9-10 ноября',
            time: '18:00',
        },
        {
            id: 2,
            category: "Будущие",
            img: photo2,
            name: "Золотов Геннадий Борисович",
            position: "Руководитель отдела патентно-юридического делопроизводства",
            place: 'WIPO SUMMER SCHOOL — 2021 RUSSIA',
            des: 'Летняя школа Всемирной организации интеллектуальной собственности',
            date: '28 июня - 9 июля',
            time: '15:30',
        },
        {
            id: 3,
            category: "Прошедшие",
            img: photo1,
            name: "Раймм Пахоменко Вячеславовна",
            position: "Адвокат",
            place: 'Менторская гостинная',
            des: 'Индивидуальная 30-ти минутная сессия с разбором вашего кейса.',
            date: '8-10 февраля',
            time: '19:20',
        },
        {
            id: 4,
            category: "Прошедшие",
            img: photo2,
            name: "Осоргина Екатерина Александровна",
            position: "Патентный поверенный РФ",
            place: 'WIPO SUMMER SCHOOL — 2021 RUSSIA',
            des: 'Летняя школа Всемирной организации интеллектуальной собственности',
            date: '12 декабря',
            time: '18:50',
        },
    ]
    const pastForums = forumsData.filter((forum) => forum.category === "Прошедшие");
    const futureForums = forumsData.filter((forum) => forum.category === "Будущие");

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [filteredForums, setFilteredForums] = useState(pastForums);
    const [currentBtn, setActiveBtn]=useState("past");
    const [isPopUpOpen, setPopUpOpen] = useState(false);
    const [selectedExpert, setSelectedExpert] = useState(null);

    const showPastForums = () => {
        setFilteredForums(pastForums)
    }

    const showFutureForums = () => {
        setFilteredForums(futureForums);
    };
   
    
   

   const  toggleActiveBtn=(BtnType)=>{
       setActiveBtn((prevBtn)=>(prevBtn===BtnType ? null : BtnType))
    }

    const handleExpertClick = (expert) => {
      setSelectedExpert(expert); 
        setPopUpOpen(true); 
      };

    return (
      
            <section style={{backgroundImage: `url(${BackGroundImg})`}}
             className="experts bg-[#f9f9f9]
             pt-[60px]  sm:pt-[80px]  md:pt-[120px] lg:pt-[160px] pb-[120] xl:pb-[160px]">
                <div className="container mx-auto ">
                    <div className="experts__upper-info">
                        <div className="experts__title text-black text-[24px] font-normal sm:text-[28px] md:text-[32px] lg:text-[38px]">Команда экспертов</div>
                        <p className="experts__des  mt-[12px] max-w-[707px] text-[16px] text-[#8a8a8a] font-medium">Наша команда — эксперты в сфере IP. Мы берёмся за работу и доводим дело до конца, потому что понимаем ценности вашего бизнеса</p>
                    </div>
                    <div className="experts__swiper-content mt-[35px] md:mt-[40px] lg:mt-[50px]">
                        <Swiper className='expert__swiper'
                            spaceBetween={50}
                            slidesPerView={1}
                            breakpoints={{
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1011: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}

                            onSwiper={(swiper) => {
                                console.log(swiper);
                                setSwiperInstance(swiper);
                            }}
                            onSlideChange={() => console.log('slide change')}

                        >

                            {expertsData.map((slide) => 
                            <SwiperSlide   onClick={() => handleExpertClick(slide)}
                             className='expert__slide' >
                                <div key={slide.id} className="expert__photo rounded-[8px] max-w-[289px] inset-0 opacity-50 bg-[#5c5c5c]  relative">
                                    <img src={slide.img} alt="img__expert" />
                                </div>
                                <div className="experts__data">
                                    <div className="experts__name mt-[10px] text-4 font-medium md:text-[18px]">{slide.name}</div>
                                    <p className="experts__position mt-[5px] text-[#5c5c5c] text-[14px] font-normal">{slide.position}</p>
                                </div>

                            </SwiperSlide>
                            )}
                        </Swiper>
                        <div className="expert__wrap-minibuttons"> 
                            <MiniButtons 
                             swiperInstance={swiperInstance} /></div>
                    <OurExperts isOpen={isPopUpOpen} onClose={() => setPopUpOpen(false)} expert={selectedExpert} />
                    </div>
                    <div className="experts__forums mt-[35px] md:mt-[40px] lg:mt-[70px] mb-[50px]">
                        <div className="experts__forums-info flex justify-between">
                            <div className="experts__forum-title font-medium text-[20px] md:text-[24px]">Мы на форумах</div>
                            <div className="experts__forum-category flex gap-[25px] font-medium text-[16px]">
                                <button className={`past__forums  text-[#5c5c5c] ${currentBtn=== "past"? 'active' : ''}`}
                                     onClick={()=>{toggleActiveBtn("past") 
                                        showPastForums()}}
                                >Прошедшие</button>
                                <button className={`future__forums  text-[#5c5c5c] ${currentBtn==="future" ? 'active' : ''}`}
                                    onClick={()=>{toggleActiveBtn("future") 
                                    showFutureForums()}} >Будущие</button>
                            </div>
                        </div>
                        {filteredForums.map((forum) =>
                            <div className="expert__forums-list w-[1200px] grid grid-cols-1 xl:grid-cols-2  mt-[30px]">
                                <div className="forums__expert flex items-center  gap-[15px] ">
                                    <div className="expert__fromu__minphoto-wrapper  rounded-full inset-0 opacity-50 bg-[#5c5c5c] ">
                                    <img src={forum.img} alt="photo" />
                                    </div>
                                    <div className="forum__expert-data">
                                        <div className="forum__partipicant text-4 font-medium">{forum.name}</div>
                                        <p className="forum__par-des max-w-[330px] mt-[5px] text-[#5c5c5c] text-[14px] font-normal">{forum.position}</p>
                                    </div>
                                </div>
                                <div className="expert__wrap flex xl:ml-[-90px]">
                                    <div className="forum__information flex flex-col justify-center">
                                        <div className="forum__place text-[18px] font-medium">{forum.place}</div>
                                        <hr className='forum__line mt-[5px] border-[#da4533] w-[271px] md:w-[339px] lg:w-[495px]'></hr>
                                        <p className="forum__description  mt-[5px] max-w-[495px] text-[#5c5c5c] text-[16px] font-normal">{forum.des}</p>
                                    </div>
                                    <div className="forum__scedule flex xl:ml-[-10px]">
                                        <BigCircles>
                                            <p className="forum__date ml-[30px]">{forum.date}</p>
                                            <span className="forum__time ml-[50px]"> {forum.time}</span>
                                        </BigCircles>
                                    </div>
                                </div>

                            </div>
                        )}


                    </div>
                  
                </div>
            </section>
        

    )

}

export default Experts