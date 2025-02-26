import './index.scss'
import logo from '../../assets/img/Header/logo.svg'
import biglogo from '../../assets/img/Footer/footer-logo.svg'
import { Nav } from '../Nav'
function Footer() {
    return (
        <section className="footer bg-[#1B1B1B]">
            <div className="container__footer mx-[20px]">
                <div className="footer__upper  pt-[40px] md:pt-[60px] lg:pt-[100px] text-[14px] font-normal
     md:flex md:gap-[20px] ">
                    <img className='flex md:hidden'
                        src={logo} alt="logo" />
                    <img className='hidden md:flex'
                        src={biglogo} alt="biglogo" />
                    <div className="footer__text lg:flex lg:gap-[184px]">
                        <p className="footer__des mt-[14px] text-[#8a8a8a] md:max-w-[480px] lg:max-w-[515px]   ">Общество с ограниченной
                            ответственностью «Центр интеллектуальной собственности и инноваций „АйПиХаб“»</p>
                        <div className="footer__data mt-[15px] flex flex-col gap-[5px] md:flex-row lg:flex-col">
                            <div className="footer__place text-white md:max-w-[230px]">  123317, г. Москва, Пресненская наб., д.
                                8, стр. 1, эт. 3, п. 1, оф. 10</div>
                            <div className="footer__tel">
                                <div className="footer__num text-[#8a8a8a]">ИНН: <span className='footer__span text-white'>7703472433</span></div>
                                <div className="footer__num text-[#8a8a8a]">ИНН: <span className='footer__span text-white'>7703472433</span></div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className="footer__line border-white white mt-[40px]" />
                <div className="footer__beneath mt-[35px] lg:mt-[50px] flex flex-wrap justify-between">
                    <nav className="footer__list flex flex-col gap-[15px]">
                        <nav className="footer__list-title text-[#8a8a8a]  font-medium text-[16px]">
                            Навигация:
                        </nav>
                        <Nav direction='col' />
                    </nav>
                    <nav className="footer__list flex flex-col gap-[15px]">
                        <nav className="footer__list-title text-[#8a8a8a]  font-medium text-[16px]">
                            Наши контакты:
                        </nav>
                        <a href='mailto:example@iphub.com' target="_blank"
                            className="footer__item text-white font-medium text-[16px]">example@iphub.com</a>
                        <a href='tel:+78888888888' target="_blank"
                            className="footer__item text-white font-medium text-[16px]">+7 (888) 888 88 88</a>
                        <nav className="footer__item text-white font-medium text-[16px]">Схема проезда</nav>
                    </nav>
                    <nav className="footer__list-third flex flex-col gap-[15px]">
                        <nav className="footer__list-title text-[#8a8a8a]  font-medium text-[16px]">
                            Мы в соцсетях:
                        </nav>
                        <a href="https://www.facebook.com" target="_blank"
                            className="footer__item  text-white font-medium text-[16px]">Facebook</a>
                        <a href="https://www.instagram.com" target="_blank"
                            className="footer__item  text-white font-medium text-[16px]">Instagram</a>
                    </nav>
                    <nav className="footer__list  hidden md:flex md:flex-col md:gap-[15px] ">
                        <nav className="footer__list-title text-[#8a8a8a]  font-medium text-[16px]">
                            Как добраться:
                        </nav>
                        <nav className="footer__item text-white font-medium text-[16px]">Схема проезда</nav>
                    </nav>
                </div>
                <div className="footer__dot flex flex-col gap-[10px] mt-[35px] text-white font-normal text-[12px] md:mt-[40px] md:text-[14px] sm:flex-row sm:justify-between pb-[30px] md:pb-[50px]">
                    <div className="footer__dot-item">Публичная оферта</div>
                    <div className="footer__dot-item">Пользовательское соглашение</div>
                    <div className="footer__dot-com text-[#8a8a8a] ">© 2021 IPhub. Все права защищены.</div>
                </div>
            </div>
        </section>
    )
}

export default Footer