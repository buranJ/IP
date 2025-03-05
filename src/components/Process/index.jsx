import Num1 from '../../assets/img/Process/FirstImg.svg'
import Num2 from '../../assets/img/Process/imgNum1.svg'
import Num3 from '../../assets/img/Process/imgNum2.svg'
import Num4 from '../../assets/img/Process/imgNum3.svg'
import Num5 from '../../assets/img/Process/imgNum4.svg'
import Btn1 from '../../assets/img/Process/slider__btn1.svg';
import Btn2 from '../../assets/img/Process/slider__btn2.svg';
import arrow from '../../assets/img/Process/arrow__process.svg'
import processImg1 from '../../assets/img/Process/des__img1.svg'
import processImg2 from '../../assets/img/Process/des__img2.svg'
import processImg3 from '../../assets/img/Process/des__img3.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import './index.css'
const stageData=[
    {
        id:1,
        img: Num1,
        des: "Подготовка и подача заявки"
    },
    {
        id:2,
        img: Num2,
        des: "Делопроизводство и сопровождение заявки"
    },
    {
        id:3,
        img: Num3,
        des: "Поддержка после регистрации"
    },
    {
        id:4,
        img: Num4,
        des: "Выдача свидетельства на товарный знак"
    },
    {
        id:5,
        img: Num5,
        des: "Продление товарного знака"
    },
]





function Process(){
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isactiveSlide,setActiveSlide]=useState(0);

     const HandleNext=()=>{
       if(swiperInstance){
         setActiveSlide(swiperInstance.index+1)
       }
     }
     const HandlePrev=()=>{
       if(swiperInstance){
         setActiveSlide(swiperInstance.index-1)
       }
     }

 return(
     <section className="process bg-[#1b1b1b]">
         <div className="container-process text-white mx-[20px]">
             <div className="process__info flex justify-between
              pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[100px] xl:pt-[160px]">
               <div className="process__text-wrapper">
                  <div className="process__title mt-[12px] font-normal text-[24px] md:text-[26px] lg:text-[32px] xl:text-[38px]">Процесс работы</div>
               <div className="process__des mt-[12px] md:mt-[16px] text-[#8a8a8a] text-[14px] md:text-[16px] font-medium max-w-[701px]">Достаточно емкое описание блока в две строки, позволяющее расскрыть смысл блока, привлечь внимание пользователя и побудить в действию</div>
               </div>
               <div className="process__navigation hidden md:flex md:place-self-end ">
               <div className="process__btns  mt-[25px] flex gap-[10px] justify-center">
                          <button className="process-right flex items-center gap-[10px] justify-center"
                              onClick={()=>swiperInstance.slidePrev()}
                          >
                              <img className='bg-[#1b1b1b]'
                               src={Btn1} alt="Previous" />
                          </button>
                          <button className="process-right flex items-center gap-[10px] justify-center"
                                onClick={()=>swiperInstance.slideNext()}
                          >
                              <img className='bg-[#1b1b1b]'
                              src={Btn2} alt="Next" />
                          </button>
                      </div>
               </div>
              
             </div>
           <div className="process__swiper-content">
           <Swiper className='process__swiper mt-[36px] md:mt-[40px] xl:mt-[50px]'
   spaceBetween={20}
   slidesPerView={2} 
   centeredSlides={true}
   breakpoints={{
     360: { slidesPerView: 2, spaceBetween: 37 },
     728: { slidesPerView: 3, spaceBetween: 37 },
     1000: { slidesPerView: 4, spaceBetween: 32 },
     1216: { slidesPerView: 5, spaceBetween: 34 },
   }}
   onSwiper={setSwiperInstance}
   onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
     
   >
        {stageData.map((item,index)=>(
     <SwiperSlide key={index}
     className="process__slide bg-[rgba(255, 255, 255, 0.05)] relative max-w-[216px]  ">
     <div className="process__img flex justify-between">
       <img className="color-black"
           src={item.img} alt="num__img" />
         <img className="mr-[14px]"
         src={arrow} alt="arrow" />
</div>
         <div className={`process__slider-des mt-[5px] ${
       isactiveSlide === index ? 'text-[#da4533]' : ' text-white' }`}>
          {item.des}
</div>   
     </SwiperSlide>
      ))}
   </Swiper>
   <div className="process__details flex justify-between items-center mt-[25px] md:mt-[40px] xl:mt-[50px]">
     <div className="process__details-text"> 
         <div className="process__result">
     <div className="process__title-details">Предварительное обсуждение</div>
     <p className="process__des-details mt-[8px] text-[#8a8a8a] text-[14px] md:text-[16px] font-medium max-w-[701px]">Проверка товарного знака на охраноспособность, тождество и сходство в отношении интересующих товаров / услуг.
     <br/>Подбор классов МКТУ</p>
</div>
          <div className="process__stages mt-[15px]">
           <div className="process__title-details">Результаты этапа</div>
           <p className="process__des-details mt-[8px] text-[#8a8a8a] text-[14px] md:text-[16px] font-medium max-w-[701px]">Вы получаете официальное уведомление (подтверждение) от Роспатента о подаче заявки</p>
          </div>
          </div>
          <div className="process__details-img">
           <img className='hidden md:flex lg:hidden min-w-[229px] '
            src={processImg1} alt="img1 " />
           <img className='hidden lg:flex xl:hidden'
           src={processImg2} alt="img2" />
           <img className='hidden xl:flex'
            src={processImg3} alt="img3" />
          </div>
           </div>
           <div className="process__slider-nav flex  justify-center md:hidden"> 
           <div className="process__btns mt-[25px] flex gap-[10px] justify-center">
                          <button className="process-right flex items-center gap-[10px] justify-center"
                              onClick={()=>swiperInstance.slidePrev()}
                          >
                              <img className='bg-[#1b1b1b]'
                              src={Btn1} alt="Previous" />
                          </button>
                          <button className="process-right flex items-center gap-[10px] justify-center"
                                onClick={()=>swiperInstance.slideNext()}
                          >
                              <img className='bg-[#1b1b1b]'
                               src={Btn2} alt="Next" />
                          </button>
                      </div>
     </div>
           </div>
         </div>
     </section>
    )
} 

export default Process