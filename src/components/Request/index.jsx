import Circle from "../Button/Circle"
import ara from "../../assets/img/Request/arro.svg"
import React, { useRef } from "react"
// import emailJs from '@emailjs/browser';


function Request() {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailJs
            .sendForm('service_7wyoo1k', 'template_rg4e3r3', form.current, {
                publicKey: 'bi5HS2w-SasxTdYQC',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }



    return (
        <section className="request">
            <div className="container mx-auto ">
                <div className="request__content  bg-[#1b1b1b] pl-[30px] pr-[20px] pt-[20px] pb-[25px] max-w-[360px] md:max-w-[440px] md:pt-[40px] md:px-[30px] md:pb-[20px]  lg:max-w-[510px] lg:px-[65px]    rounded-[10px]  ">

                    <div className="request__text text-white  md:w-[380px]  ">
                        <div className=" md:text-center" >

                            <h1 className="title__request font-[500] text-[24px] text-center  ">Оставьте заявку</h1>
                            <p className="description__request font-[500] text-[16px] text-[#8A8A8A] text-center  mt-2 ">Укажите свои данные, и наш специалист свяжется с вами</p>
                        </div>
                        <div className="inputs mt-[25px] ">
                            <form ref={form} onSubmit={sendEmail} >
                                <div className="input__name">
                                    <p  className="pre__title font-[400]  text-[14px] text-[#8A8A8A] ">Как к вам обращаться</p>
                                    <input name="to_name" type="text" className="request__name mt-[2px]  bg-[rgba(138,138,138,0.15)] focus:bg-[#1f1f1f] py-[10px] pr-[20px] pl-[15px] w-full rounded-lg focus:outline-white focus:outline-[2px] font-[400] text-[16px]   " placeholder="Введите имя" />
                                </div>
                                <div className="input__number mt-[15px] ">
                                    <p className="pre__title font-[400] text-[14px] text-[#8A8A8A] ">Номер телефона / WhatsApp</p>
                                    <input type="number" className="request__number  bg-[rgba(138,138,138,0.15)] focus:bg-[#1f1f1f] mt-[2px] py-[10px] pr-[20px] pl-[15px] w-full rounded-lg focus:outline-white focus:outline-[2px] font-[400] text-[16px]  " placeholder="+996 (779) 707 - 999 " />
                                </div>
                                <div className="input__mail mt-[15px] ">
                                    <p className="pre__title font-[400] text-[14px] text-[#8A8A8A] ">Почта</p>
                                    <input  type="email" required name="user_email" className="request__mail  bg-[rgba(138,138,138,0.15)] focus:bg-[#1f1f1f] mt-[2px] py-[10px] pr-[20px] pl-[15px] w-full rounded-lg focus:outline-white focus:outline-[2px] font-[400] text-[16px] " placeholder="Введите email" />
                                </div>
                                <div className="input__comment mt-[15px] ">
                                    <p className="pre__title font-[400] text-[14px] text-[#8A8A8A] ">Запрос</p>
                                    <textarea type="text" name="user_req" className="request__comment  bg-[rgba(138,138,138,0.15)] focus:bg-[#1f1f1f] mt-[2px] py-[10px] pr-[20px] pl-[15px] w-full h-[120px] rounded-lg focus:outline-white focus:outline-[2px] font-[400] text-[16px] " />
                                </div>
                                <div className="input__submit flex items-start mt-[15px]  max-w-[310px] md:max-w-[380px] gap-[8px] ">
                                    <input type="checkbox" className="request__check bg-[#1f1f1f] " />
                                    <p className="check__description w-[288px] font-[400] text-[12px] md:w-[354px] ">Я принимаю соглашение на <span className=" underline " > обработку персональных данных </span>и <span className=" underline " >политику конфиденциальности</span> </p>
                                </div>
                                <div className=" flex justify-center mt-[26px] items-center  " >

                                    <Circle type="submit" > Отправить
                                        <img src={ara} alt="arrow" className="transform  group-hover:transform group-hover:translate-x-8 duration-300" />

                                    </Circle>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Request