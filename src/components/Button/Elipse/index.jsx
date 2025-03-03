function Elipse({ bg, children, wrap = "relative z-10 " }) {

  return (
    <button style={{ background: bg }} className={` ${wrap} cursor-pointer elipse text-[14px] md:text-[16px]  max-w-[259px] px-[20px] py-[23px] rounded-[100%] text-white`}>
      <span class=" absolute inset-0 hover:border hover:border-white  rounded-[100%] scale-104  -rotate-8 duration-80 "></span>
      {children}
    </button>

  );
}

export default Elipse;
