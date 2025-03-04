
import registerData from "./Register.json";

function Register() {
  return (
    <>
      <section className="register bg-black">
        <div className="container">
          <div className="register__content">
            <h2 className="register__title ml-[40px] font-second font-normal text-[24px] leading-[135%] text-white md:text-[38px]">
              Когда необходимо
            </h2>
            <div className="register__box mt-[50px] flex flex-col gap-[40px] md:ml-[10px] md:flex-row md:justify-center">
              {registerData.map((item) => (
                <div
                  key={item.id}
                  className="register__frame gap-[20px] w-[370px] bg-[#1B1B1B] h-[190px] p-6 rounded-lg border border-red-500/50 text-white"
                >
                  <h4 className="font-main font-medium text-[18px] leading-[160%] text-white">
                    {item.title}
                  </h4>
                  <p className="font-main font-normal text-[16px] leading-[160%] text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Register;
