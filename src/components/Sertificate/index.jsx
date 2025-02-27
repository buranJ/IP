import Ser1 from '../../assets/img/icon.svg'

import './style.scss'
function Sertificate() {
    return (
        <section className="sertificate flex justify-end">
            <div className="container  max-w-[804px] mx-[20px]">
                <h4 className="ser__title text-white text-[24px] font-normal sm:text-[28px] md:text-[32px] xl:text-[38px]">Подтвержденный практикой</h4>
                <p className="ser__des mr-[20px] mt-[14px] text-white text-sm font-medium sm:text-[16px]">Мы и наши клиенты гордимся опытом, который подтверждается нашими результатами от закрепления прав заявителей до успешной защиты интересов</p>
                <div className="ser__imgs grid grid-cols place-items-center w-full  gap-[15px] mt-[39px] 
          pb-[60px] sm:pb-[80px] md:grid-cols-2 md:pb-[120px] lg:pb-[120px] xl:pb-[160px]">
                    <img src={Ser1} alt="Img1" />
                    <img src={Ser1} alt="Img2" />
                    <img src={Ser1} alt="Img3" />
                    <img src={Ser1} alt="Img4" />
                    <img src={Ser1} alt="Img5" />
                    <img src={Ser1} alt="Img6" />
                </div>
            </div>
        </section>
    )
}

export default Sertificate