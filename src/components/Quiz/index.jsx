import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import bonus from '../../assets/img/Quiz/bonus1.svg'
import bonus2 from '../../assets/img/Quiz/bonus2.svg'


import 'swiper/css';
const sliderData = [
    {
        id: 1,
        title: "Какую интеллектуальную собственность вы хотите зарегистрировать?",
        items: [
            "Регистрация товарного знака",
            "Регистрация авторского права",
            "Регистрация патента",
            "Защита интеллектуальных прав",
            "Юридическая экспертиза перед регистрацией",
            "Оспаривание патентных решений",
        ],
    },
    {
        id: 2,
        title: "С какой целью вы обращаетесь?",
        items: [
            "Регистрацию полезной модели",
            "Регистрацию промышленного образца",
            "Регистрацию прав на использование полезной модели, промобразца, изобретенния",
            "Подготовка заявки на выдачу патента",
            "Регистрацию изобретения",
            "Подготовка заявки на передачу прав патента",
        ],
    },
    {
        id: 3,
        title: "Какие бизнес-услуги вас интересуют?",
        items: [
            "Регистрация компании",
            "Разработка бизнес-плана",
            "Бухгалтерское сопровождение",
            "Юридическая поддержка",
            "Оформление франшизы",
            "Разработка корпоративных договоров",
        ],
    },
    {
        id: 4,
        title: "По какому вопросу вам нужна юридическая консультация?",
        items: [
            "Защита прав интеллектуальной собственности",
            "Трудовые споры",
            "Налоговые вопросы",
            "Гражданские иски",
            "Юридическая помощь стартапам",
            "Разработка договоров",
        ],
    },
    {
        id: 3,
        title: "Какую международную защиту вы хотите оформить?",
        items: [
            "Международный патент (PCT)",
            "Регистрация товарного знака за границей",
            "Защита авторских прав за рубежом",
            "Лицензирование патента в других странах",
            "Оспаривание патентов за границей",
            "Международная судебная защита",
        ],
    },
    {
        id: 6,
        title: "Какие услуги нужны вашему стартапу?",
        items: [
            "Оформление интеллектуальной собственности",
            "Юридическое сопровождение инвестиций",
            "Разработка NDA и договоров",
            "Оформление франшизы",
            "Юридический аудит перед сделкой",
            "Регистрация бизнеса в другой стране",
        ],
    },
    {
        id: 7,
        title: "В каком направлении нужна судебная защита?",
        items: [
            "Защита авторских прав",
            "Споры по патентам",
            "Нарушение товарных знаков",
            "Лицензионные и лицензионные споры",
            "Судебное разбирательство по контрактам",
            "Международный арбитраж",
        ],
    },
    {
        id: 8,
        title: "Какие услуги по защите ПО вам нужны?",
        items: [
            "Регистрация авторских прав на ПО",
            "Патентование программного обеспечения",
            "Оформление лицензионного договора",
            "Юридическая защита от копирования",
            "Судебная защита интеллектуальной собственности",
            "Консультация по международной защите ПО",
        ],
    },
];


function Quiz() {
    const [swiperInstance, setSwiperInstance] = useState(null);

    const [activeIndexes, setActiveIndexes] = useState({});

    const toggleActive = (id, idx) => {
        setActiveIndexes((prev) => ({
            ...prev,
            [id]: prev[id] === idx ? null : idx,
        }));
    };



    return (
        <section className="quiz bg-[#da4533] max-w-[ 1920px] ">
            <div className="container mx-auto">
                <div className="quiz-info ml-[20px]">
                    <h5 className="quiz__title-main text-white text-[16px] mt-[160px] font-normal md:text-[38px]">Не знаете, что вам нужно? </h5>
                    <p className="quiz__des text-white text-[16px] mt-[16px] font-medium">Пройдите квиз, чтобы выбрать оптимальное решение для Вашей задачи</p>
                </div>
                <div>
                    <div className="quiz__questions  bg-[#1b1b1b] mx-[20px]">
                        <Swiper className='quiz__swiper max-w-[1041px]  mt-[50px] pb-[0px] '
                            spaceBetween={50}
                            slidesPerView={1}
                            onSwiper={(swiper) => {
                                console.log(swiper);
                                setSwiperInstance(swiper);
                            }}
                            onSlideChange={() => console.log('slide change')}

                        >
                            {sliderData.map((slide, index) =>
                                <SwiperSlide key={index} >
                                    <div className="carousel-item">
                                        <div className="slider__up flex items-center justify-between">
                                            <div className="quiz__title text-white font-medium text-[16px] md:text-[24px] ">
                                                {slide.title}
                                            </div>
                                            <div className="slider__counter text-white mr-[40px] text-[36px] font-medium">
                                                <span className="slider__num text-[#da4533]">{slide.id}</span>/8</div>
                                        </div>
                                        <ul className="slider__items-list text-white font-medium text-[16px]">
                                            {slide.items.map((item, idx) => (
                                                <li className={`slider__item ${activeIndexes[slide.id] === idx ? 'active' : ''}`}
                                                    onClick={() => toggleActive(slide.id, idx)} key={idx}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div className="navigation-buttons flex justify-between mx-[40px] max-w-[1041px] max-h-[462px] pb-[40px]" style={{ marginTop: '20px' }}>
                            <button onClick={() => swiperInstance?.slidePrev()}
                                style={{ marginRight: '10px' }}
                                className="hero__btn1 mt-[20px] self-center  relative border border-[#da4533] rounded-[100%] w-[135px] h-[41px]">
                                <svg className='btn1__svg absolute  top-[17px] right-[115px]'
                                    width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64644L3.82843 0.464464C4.02369 0.269202 4.34027 0.269202 4.53553 0.464464C4.7308 0.659726 4.7308 0.976308 4.53553 1.17157L1.70711 4L4.53553 6.82842C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.73079 4.02369 7.73079 3.82843 7.53553L0.646446 4.35355ZM31 4.5L1 4.5L1 3.5L31 3.5L31 4.5Z" fill="#DA4533" />
                                </svg>
                                <span className='button1__text text-sm font-medium text-[#da4533] text-center'> Назад</span>
                            </button>

                            <button onClick={() => swiperInstance?.slideNext()}
                                style={{ marginRight: '10px' }}
                                className="hero__btn2 mt-[20px] self-center  relative border border-[#da4533] rounded-[100%] w-[135px] h-[41px]">
                                <svg className='btn2__svg absolute  top-[17px] left-[115px]'
                                    width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#DA4533" />
                                </svg>
                                <span className='button2__text text-sm font-medium text-[#da4533] text-center'> Далее</span>
                            </button>

                        </div>
                    </div>

                    <div className="quiz__bonus mx-[20px]">
                        <p className="quiz-bonus-title mt-[50px] text-white text-[24px] font-medium">Бонусы после прохождения</p>
                        <div className="quiz__bonus-block mt-[25px] flex gap-[20px] pb-[160px]">
                            <div className="bonus__block bg-[#1b1b1b]">
                                <img src={bonus} alt="img" />
                                <p className="bonus__des">Название бонуса в одну или две строки</p>
                            </div>
                            <div className="bonus__block bg-[#1b1b1b]">
                                <img src={bonus2} alt="img2" />
                                <p className="bonus__des">Название бонуса в одну или две строки</p>

                            </div>
                        </div>
                    </div>

                </div>




            </div>

        </section>
    )
}

export default Quiz