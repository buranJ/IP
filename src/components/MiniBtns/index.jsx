import Btn1 from '../../assets/img/Bisness/leftbtn.svg';
import Btn2 from '../../assets/img/Bisness/rightbtn.svg';



function MiniBtns({ swiperInstance, gap={}, color }) {
    return (
        <div className={`minibuttons ${gap} mt-[25px] flex gap-[10px] justify-center`}>
            <button className="btn-mini-left flex items-center gap-[10px] justify-center"
                onClick={() => swiperInstance?.slidePrev()}
            >
                <img  style={{backgroundColor: color}}
                src={Btn1} alt="Previous" />
            </button>
            <button className="btn-mini-right flex items-center gap-[10px] justify-center"
                onClick={() => swiperInstance?.slideNext()}
            >
                <img style={{backgroundColor: color}}
                src={Btn2} alt="Next" />
            </button>
        </div>
    );
}

export default MiniBtns;
