import './style.scss'

function OurExperts({isOpen,onClose,expert}) {
     if(!isOpen) return null
    return (
        <section className="our">
                    <div key={expert.id}
                     className="container__our mx-[20px] flex flex-col md:flex-row md:gap-[30px]">
                        <img className=' rounded-[8px] mt-[10px] mb-[10px] max-w-[440px] inset-0 opacity-50 bg-[#5c5c5c]'
                         src={expert.img} alt="expert__photo" />
                       
                        <div  className="our__info relative"> 
                        <svg onClick={onClose}
                         className=' absolute top-0 right-0 flex cursor-pointer'
                          width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L27 27M27 1L1 27" stroke="#DA4533" strokeWidth="2" />
</svg>
                        <p className="our__expert-name mt-[25px] text-[22px] font-medium">{expert.name}</p>
                        <p className="our__expert-position text-[#5c5c5c] text-[14px] font-normal">{expert.position}</p>
                        <p className="our__expert-text mt-[20px] text-[#5c5c5c] text-[14px] font-normal">Создаёт тихое право сильных брендов. Строит импакт-компанию и развивает команду, которая выбрала сферу интеллектуальной собственности своей миссией и которая способна смело и с удовольствием превосходить ожидания клиентов. Выводит в принцип работы равноценность и значимости достижения единой цели с клиентом.
Выбирает клиентов, как партнёров, для которых бизнес — это личное.
Область интересов — формирование устойчивой архитектуры систем управления интеллектуальной собственностью через создание честного сильного конкурентного преимущества для правообладателей.</p>
</div>
                       
                    </div>
        </section>
    );
}

export default OurExperts;
