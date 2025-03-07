import './style.scss'
import Elipse from "../Button/Elipse"
import Defaultimg1 from '../../assets/img/Consultation/consul__img1.svg'
import Defaultimg2 from '../../assets/img/Consultation/consul__img2.svg'
import Defaultimg3 from '../../assets/img/Consultation/consul__img3.svg'

function Consultation({
    title = "Оставьте заявку на консультацию и мы вам поможем!",
    img1 = Defaultimg1,
    img2 = Defaultimg2,
    img3 = Defaultimg3,
    titleClass = '' }) {
    return (
        <section className="consultation flex bg-[#da4533] pt-[40px] md:pt-[60px] lg:pt-[100px] pb-[24px] md:pb-[80px] lg:pb-[100px]">
            <div className="container mx-auto  flex self-center ">
                <div className="consultation__info flex text-center  text-white md:text-start  flex-col items-center  md:items-start">
                    <div className={`consulation__title  max-w-[707px] text-[24px]  sm:text-[28px]  md:text-[32px] lg:text-[38px] font-normal ${titleClass}`}>
                        {title} </div>
                    <p className="consultation__des  max-w-[600px] mt-[12px] text-[14px] md:text-[16px] font-medium">У нас есть решения для всех ваших потребностей в сфере защиты и регистрации интеллектуальной собственности</p>
                    <div className="consultation__get relative  bg-black mt-[40px]
        w-[299px] h-[91px] flex items-center text-center 
               justify-center rounded-[100%] text-white text-[14px] font-medium md:text-[16px]">
                        <Elipse>
                         <p  > Получить индивидуальную консультацию</p>
                        </Elipse>
                    </div>
                </div>
                <div className="consultation__img hidden md:flex  lg:ml-[200px]">
                    <div className="img__wrap w-[250px]">
                        <img className='hidden md:flex lg:hidden  '
                            src={img1} alt="img__consultation" />
                    </div>
                    <img className='hidden lg:flex  w-[327px] xl:hidden'
                        src={img2} alt="img__consultation" />
                    <img className='hidden xl:flex w-[423px]'
                        src={img3} alt="img__consultation" />
                </div>
            </div>


        </section>
    )
}
export default Consultation