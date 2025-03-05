import Request from "../../Request";
import { useState } from "react";
import close from "../../../assets/img/Request/close.svg"


function Elipse({ bg, children, wrap = "relative  " }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button style={{ background: bg }} onClick={() => setIsOpen(true)} className={` ${wrap} cursor-pointer elipse text-[14px] md:text-[16px]  max-w-[259px] px-[20px] py-[23px] rounded-[100%] text-white`}>
        <span className=" absolute inset-0 hover:border hover:border-white  rounded-[100%] scale-104  -rotate-8 duration-90 "></span>
        {children}
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center z-2 justify-center bg-black/75"
        >
          <div onClick={(e) => e.stopPropagation()} >
            <img src={close} alt="close_icon" onClick={() => setIsOpen(false)} className=" transform translate-x-79 md:translate-x-98 lg:translate-x-115 lg:translate-y-13 lg:w-[28px] lg:h-[28px] w-[23px] h-[23px] translate-y-11 cursor-pointer  " />

            <Request />
          </div>

        </div>

      )}

    </>
  )
}


export default Elipse;
