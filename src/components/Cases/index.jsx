import './style.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import Img1 from '../../assets/img/Case/case__img1.svg';
import Img2 from '../../assets/img/Case/case__img2.svg';
import Img3 from '../../assets/img/Case/case__img3.svg';
import Arrow from '../../assets/img/Case/case__arrow.svg'
import MiniButtons from '../../components/MiniBtns'
import RedButton from '../RedButton';


const caseSliderData = [
  {
    id: 1,
    title: "CIRKLE — производитель косметической продукции",
    description: "Как в результате защиты мы зарегистрировали бренд российской косметики при наличии оснований для отказа.",
    img: Img1,
  },
  {
    id: 2,
    title: "Camera IQ — производитель систем машинного зрения",
    description: "Защита прав после ребрендинга. Как провести успешную регистрацию",
    img: Img2,
  },
  {
    id: 3,
    title: "NeuroTech Vision — разработчик нейросетевых решений для обработки изображений",
    description: "Как в результате защиты мы зарегистрировали бренд инновационного стартапа в области компьютерного зрения, несмотря на схожие товарные знаки",
    img: Img3,
  },
  {
    id: 4,
    title: "InnovaScan — поставщик технологий распознавания объектов",
    description: "Как в результате защиты мы подтвердили уникальность торговой марки, несмотря на претензии конкурентов и существующие патенты в сфере машинного зрения",
    img: Img2,
  },
  {
    id: 5,
    title: "OptiSense — производитель интеллектуальных сенсорных систем",
    description: "Как в результате защиты мы добились регистрации товарного знака, даже при наличии аналогичных разработок на рынке",
    img: Img2,
  },


];
function Cases() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <section className="case">
      <div className="container-case mx-[20px] pb-[120px]">
        <div className="case-upper-block lg:flex lg:justify-between ">
          <div className="case__info mt-[60px] sm:mt-[80px] md:mt-[120px] lg:mt-[160px]">
            <h6 className="case__title  text-white text-[24px] font-normal sm:text-[28px]  md:text-[32px] lg:text-[38px]">Реализованные кейсы</h6>
            <p className="case__des max-w-[707px] text-[#8a8a8a] text-sm font-medium md:text-[16px]">Наши реальные истории о том, как мы помогали своим клиентам регистрировать товарные знаки и оформлять права на объекты интеллектуальной собственности</p>
          </div>
          <div className="hidden lg:flex">
            <RedButton className="case-red-button">Все кейсы</RedButton>
          </div>
        </div>
        <div className="case__slider-content rounded-[8px] mt-[30px] md:mt-[40px] xl:mt-[50px]">
          <Swiper className='case__swiper'
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              1000: {
                slidesPerView: 2,
                spaceBetween: 30,
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
            {caseSliderData.map((slide) =>
              <SwiperSlide className='case__slide bg-[rgba(255, 255, 255, 0.05)] relative' >
                <img className='case-arrow absolute left-[280px]'
                  src={Arrow} alt="arrow" />
                <div className="slide-con">
                  <div className='case__slider-img bg-[ rgba(255, 255, 255, 0.05)] h-[100px] flex justify-center items-center'>
                    <img src={slide.img} alt="img" />
                  </div>
                  <div className="case__slider-info">
                    <div className="case__slider-title mt-[35px] text-white font-medium text-4">{slide.title}</div>
                    <p className="case__slider-des mt-[5px] text-[#8a8a8a] text-sm font-normal">{slide.description}</p>
                  </div>
                </div>


              </SwiperSlide>
            )}
          </Swiper>
          <MiniButtons swiperInstance={swiperInstance} />
          <div className="flex justify-center lg:hidden">
            <RedButton className="case-red-button  ">Все кейсы</RedButton>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Cases