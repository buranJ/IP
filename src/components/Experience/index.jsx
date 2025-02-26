import Small from  '../../assets/img/Small_imgEX.svg'
import Big from '../../assets/img/Big_imgEX.svg'


function Experience(){
    return (
        <section className="experience">
            <div className="exper__con pb-[90px]  flex gap-[40px] mr-[20px]">
                <div className="exper__anim">
                    <div className="exper__img1-con">
                    <img src={Small} className='exper__img1 hidden lg:block xl:hidden min-w-[313px]'
                    alt="Img1" />
                    <img src={Big} className='exper__img2  hidden xl:block min-w-[395px] '
                     alt="Img2" />
                    </div>
                </div>
             <div className="exper__info max-w-[804px] w-full flex flex-col mx-auto">
                <div className="exper__text">
                    <h2 className="exper__text text-[24px] font-normal text-white text-start">
                    Многолетний опыт
                    </h2>
                    <p className="exper__des pt-[17px] text-sm font-medium  text-[#8a8a8a] text-start">Наша компания была создана в 2019 году специалистами, имеющими опыт работы в сфере интеллектуальной собственности более 20 лет</p>
                    </div>
                <ul className="exper__numbers flex pt-[30px]
                 text-sm font-normal  text-[#8a8a8a] flex-col gap-[15px] justify-center w-full sm:grid sm:grid-cols-2
                md:flex-row  md:flex-wrap  xl:flex-wrap xl:flex-row">
                    <li className="exper__statics rounded-lg border-t-1 border-l-1 border-[#DA4533] bg-[rgba(255, 255, 255, 0.05)] p-[15px] 
               flex md:flex-col ">
                        <span className="exper__span 
                        text-[24px] font-medium text-white mr-[15px] sm:pb-[7px]">&gt;300</span>Представления интересов в спорах по IP правам в год 
                        </li>
                    <li className="exper__statics flex rounded-lg  border-t-1 border-l-1 border-[#DA4533] bg-[rgba(255, 255, 255, 0.05)] p-[15px] 
                    flex md:flex-col">
                        <span className="exper__span text-[24px] font-medium text-white mr-[15px] sm:pb-[7px]">&gt;2500</span>Оказаний юр. помощи компаниям в год
                        </li>
                    <li className="exper__statics flex rounded-lg  border-t-1 border-l-1 border-[#DA4533] bg-[rgba(255, 255, 255, 0.05)] p-[15px] 
                    flex md:flex-col">
                        <span className="exper__span flex text-[24px] font-medium text-white mr-[15px] sm:flex-col ">1150</span>Завершённых дел по регистрации товарных знаков
                        </li>
                    <li className="exper__statics flex rounded-lg  border-t-1 border-l-1 border-[#DA4533] bg-[rgba(255, 255, 255, 0.05)] p-[15px] 
                   flex md:flex-col ">
                        <span className="exper__span flex text-[24px] font-medium text-white mr-[15px] sm:flex-col sm:pb-[7px]">61</span>Совокупный опыт экспертов
                        </li>
                    <li className="exper__statics flex rounded-lg  border-t-1 border-l-1 border-[#DA4533] bg-[rgba(255, 255, 255, 0.05)] p-[15px] 
                      flex md:flex-col ">
                        <span className="exper__span text-[24px] font-medium text-white mr-[15px] sm:pb-[7px]">99%</span>Успех получения патентов
                        </li>
                    <li className="exper__statics flex  rounded-lg  border-t-1 border-l-1 border-[#DA4533] bg-[rgba(255, 255, 255, 0.05)] p-[15px]  
                  flex md:flex-col">
                        <span className="exper__span text-[24px] font-medium text-white mr-[15px] sm:pb-[7px]">98%</span>Успех регистрации товарных знаков
                        </li>
                </ul>
                </div>
             </div>
        </section>
    )
}

export default Experience