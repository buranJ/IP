import './style.scss'
import img1 from '../../assets/img/Experts/expert__photo1.svg'
import img2 from  '../../assets/img/Experts/expert__photo2.svg'
import img3 from  '../../assets/img/Experts/expert__photo3.svg'
import img4 from  '../../assets/img/Experts/expert__photo4.svg'
import img5 from  '../../assets/img/Experts/expert__photo5.svg'


function OurExperts() {
    const expertsData=[
        {   id: 1,
            img: img1,
            name:  "Раймм Лидия Вячеславовна",
            position: "Генеральный директор IPhub",
          },
          {   id: 2,
              img: img2,
              name:  "Золотов Геннадий Борисович",
              position: "Руководитель отдела патентно-юридического делопроизводства",
            },
            {   id: 3,
              img: img3,
              name:  "Осоргина Екатерина Александровна",
              position: "Патентный поверенный РФ",
            },
            {   id: 4,
              img: img4,
              name:  "Рачеева Юлия Геннадьевна",
              position: "Патентный поверенный РФ",
            },
            {  id: 5,
              img: img5,
              name:  "Пахоменко Алина Аликовна",
              position: "Адвокат",
            }
  ] 
    return (
        <section className="our">
            {expertsData.map((expert) => {
                return (
                    <div className="container__our mx-[20px] flex flex-col md:flex-row md:gap-[30px]" key={expert.name}>
                        <img className='mt-[10px] mb-[10px] max-w-[440px]'
                         src={expert.img} alt="expert__photo" />
                        <div className="our__info"> 
                        <p className="our__expert-name mt-[25px] text-[22px] font-medium">{expert.name}</p>
                        <p className="our__expert-position text-[#5c5c5c] text-[14px] font-normal">{expert.position}</p>
                        <p className="our__expert-text mt-[20px] text-[#5c5c5c] text-[14px] font-normal">Создаёт тихое право сильных брендов. Строит импакт-компанию и развивает команду, которая выбрала сферу интеллектуальной собственности своей миссией и которая способна смело и с удовольствием превосходить ожидания клиентов. Выводит в принцип работы равноценность и значимости достижения единой цели с клиентом.
Выбирает клиентов, как партнёров, для которых бизнес — это личное.
Область интересов — формирование устойчивой архитектуры систем управления интеллектуальной собственностью через создание честного сильного конкурентного преимущества для правообладателей.</p>
</div>
                       
                    </div>
                );
            })}
        </section>
    );
}

export default OurExperts;
