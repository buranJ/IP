import Elipse from "../Button/Elipse"
import Circle from "../Button/Circle"
import heroImg from '../../assets/img/Hero/matrix.svg'
import arrow from '../../assets/img/Hero/Arrow 8.svg'


function Hero() {
    return (
        <section className="hero">
            <div className="container mx-auto">
                <div className="hero__content pt-[40px]  xl:pt-[109px] flex md:justify-between ">
                    <div className="hero__text flex flex-col items-center md:block">
                        <p className="hero__pre-title text-center md:text-left xl:t-[8px] xl:pb-[16px] text-[14px] xl:text-[16px] text-gray-500 font-medium uppercase">ВАШ IP ПАРТНЕР</p>
                        <h1 className="hero__title text-center md:text-left text-[34px] font-medium text-white xl:text-[55px]">Интеллектуальная <span className="italic">собственность</span></h1>
                        <p className="hero__description max-w-[320px] lg:max-w-[598px] mt-[10px] font-light text-[14px] md:text-[18px] text-gray-500 text-center md:text-left lg:mt-[16px]">Индивидуальные правовые решения для защиты и охраны ваших нематериальных активов в России и за рубежом</p>
                        <div className="hero__btns mt-[15px] mb-[60px]     lg:mt-[48px] lg:mb-[206px] flex flex-col items-center gap-[15px] md:flex-row md:gap-10">
                            <Elipse bg='#DA4533'  > <p  > Получить индивидуальную консультацию</p></Elipse>

                            <Circle>Все услуги <img src={arrow} alt="more btn  " className="group-hover:transform group-hover:translate-x-10 transform  translate-x-7 duration-500" /></Circle>
                        </div>
                    </div>
                    <div className="hero__image hidden md:block md:ml-[90px]"><img src={heroImg} alt="smth" /></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
