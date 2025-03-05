
import Ser1 from '../../assets/img/Sertificate/Component 184-1.svg'
import Ser2 from '../../assets/img/Sertificate/Component 184-2.svg'
import Ser3 from '../../assets/img/Sertificate/Component 184-3.svg'
import Ser4 from '../../assets/img/Sertificate/Component 184-4.svg'
import Ser5 from '../../assets/img/Sertificate/Component 184-5.svg'
import Ser6 from '../../assets/img/Sertificate/Component 184.svg'



import './style.scss'
function Sertificate() {
    return (
        <section className="sertificate flex justify-end">
            <div className="container mx-auto  ">
                <div className="content flex flex-col   items-end ">


                    <div className="sert__text">

                        <h4 className="ser__title text-white text-[24px] font-normal sm:text-[28px] md:text-[32px] xl:text-[38px]">Подтвержденный практикой</h4>
                        <p className="ser__des mr-[20px] mt-[14px] text-white lg:w-[804px] text-sm font-medium sm:text-[16px]">Мы и наши клиенты гордимся опытом, который подтверждается нашими результатами от закрепления прав заявителей до успешной защиты интересов</p>
                    </div>



                    <div className="ser__imgs grid grid-cols place-items-center lg:w-[804px]  gap-[15px] mt-[39px] 
                  pb-[60px] sm:pb-[80px] md:grid-cols-2 justify-center  ">
                        <img src={Ser6} alt="Img6" className='cursor-pointer ser__pics ' />
                        <img src={Ser3} alt="Img3" className='cursor-pointer ser__pics ' />
                        <img src={Ser4} alt="Img4" className='cursor-pointer ser__pics ' />
                        <img src={Ser1} alt="Img1" className='cursor-pointer ser__pics ' />
                        <img src={Ser2} alt="Img2" className='cursor-pointer ser__pics ' />
                        <img src={Ser5} alt="Img5" className='cursor-pointer ser__pics ' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Sertificate