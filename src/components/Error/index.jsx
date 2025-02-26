
import fall from "../../assets/img/Error/fall.svg";
import Circle from "../Button/Circle"
import arrow from '../../assets/img/Hero/Arrow 8.svg';

function Error() {
    return (
        <section className="fall bg-black">
            <div className="container">
                <div className="fall__content flex items-center flex-col gap-10 mb-[15px]">
                    <img className="fall__img w-1/2 mx-auto" src={fall} alt="fall.img" />
                    <p className="fall__poargraf font-normal text-[16px] leading-[160%] text-center text-white">К сожалению, страница не найдена. Вернитесь на главную</p>
                    <Circle className="block">
                        На главную <img src={arrow} alt="Стрелка" />
                    </Circle>
                </div>
            </div>
        </section>
    )
}

export default Error;