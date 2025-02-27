import './style.scss'

import img1 from '../../assets/img/Consultation/consul__img1.svg'
import img2 from '../../assets/img/Consultation/consul__img2.svg'
import img3 from '../../assets/img/Consultation/consul__img3.svg'

function Consultation(){
    return(
        <section className="consultation flex bg-[#da4533] pt-[40px] md:pt-[60px] lg:pt-[100px] pb-[24px] md:pb-[80px] lg:pb-[100px]">
            <div className="container-consulation  flex self-center text-white mx-[20px]  text-center md:text-start">
                <div className="consultation__info flex flex-col items-center  md:items-start">
                    <div className="consulation__title  max-w-[707px] text-[24px]  sm:text-[28px]  md:text-[32px] lg:text-[38px] font-normal">
                        Оставьте заявку на консультацию и мы вам поможем!</div>
                <p className="consultation__des  max-w-[600px] mt-[12px] text-[14px] md:text-[16px] font-medium">У нас есть решения для всех ваших потребностей в сфере защиты и регистрации интеллектуальной собственности</p>
              <div className="consultation__get relative  bg-black mt-[40px]
        w-[299px] h-[91px] flex items-center text-center 
               justify-center rounded-[100%] text-white text-[14px] font-medium md:text-[16px]">
              <span className="consultation__text">Получить индивидуальную<br/>консультацию</span>
              <svg  className='consultation__svg absolute md:hidden '
              width="297" height="97" viewBox="0 0 297 97" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M295.837 32.7322C296.477 38.7429 293.12 44.9896 286.271 51.159C279.432 57.3191 269.194 63.3236 256.295 68.8345C230.503 79.8539 194.178 88.8545 153.438 93.209C112.698 97.5635 75.2965 96.4433 47.7651 91.1235C33.9962 88.463 22.725 84.7576 14.7436 80.1815C6.75021 75.5985 2.15355 70.202 1.51381 64.1913C0.87408 58.1806 4.23152 51.9339 11.0805 45.7645C17.9192 39.6043 28.1569 33.5999 41.0561 28.089C66.8486 17.0696 103.173 8.06898 143.913 3.71447C184.653 -0.640043 222.055 0.480202 249.586 5.79995C263.355 8.46043 274.626 12.1659 282.608 16.7419C290.601 21.3249 295.198 26.7214 295.837 32.7322Z" stroke="white" />
</svg>
              </div>
        </div>
        <div className="consultation__img ">
            <div className="img__wrap w-[250px]">  
                 <img className='hidden md:flex lg:hidden  '
             src={img1} alt="img__consultation" />
             </div>
             <img className='hidden lg:flex  w-[327px] xl:hidden'
              src={img2} alt="img__consultation" />
               <img  className='hidden xl:flex w-[423px]'
              src={img3} alt="img__consultation" />
              </div>
                </div>
            
            
        </section>
    )
}
export default Consultation