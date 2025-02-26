function Elipse({ bg, children }) {

  return (
    <button style={{ background: bg }} className="elipse text-[14px] md:text-[16px] px-[20px] py-[23px] rounded-[100%] text-white">
      {children}
    </button>
  );
}

export default Elipse;
