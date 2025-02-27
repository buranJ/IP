import './index.scss'

import arrow from '../../../assets/img/Hero/Arrow 8.svg';

function BigCircles({ children }) {
    return (
        <div className="circle relative border border-[#DA4533]  rounded-full ml-[170px] md:mt-[20px]
        w-[133px] h-[133px] flex items-center  lg:w-[146px] lg:h-[146px] xl:border-none">
            <div className="circle__content"> {children}</div>
            <img src={arrow} className='arrow absolute top-[70px] left-[128px] xl:hidden'
                alt="arrow" />
        </div>
    )
}

export default BigCircles