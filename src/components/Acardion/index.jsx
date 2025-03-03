import { useState } from "react";

const faqs = [
    {
        question: "Что такое патент и что он даёт?",
        answer: "Патент — это охранный документ, предоставляющий вам исключительное право на определённый результат интеллектуальной деятельности (изобретение, полезную модель, промышленный образец). Иными словами, патент — это гарантия вашей временной монополии на производство, распространение и сбыт определённого продукта (устройства, вещества, штамма микроорганизмов и т.д.), в том числе характеризующегося только оригинальным внешним видом, реализацию описанного в патенте способа выполнения того или иного действия (технологию). В обмен на предоставление вам такого исключительного права выпублично раскрываете в описании патента всюинформацию о вашем продукте или технологии."
    },
    {
        question: "Как защититься от кражи бренда конкурентами?",
        answer: "Регистрация товарного знака..."
    },
    {
        question: "Как и где узнать, зарегистрировал ли конкурент ваш товарный знак?",
        answer: "Можно проверить в базе Роспатента..."
    },
    {
        question: "Можно ли продлить срок действия исключительного права?",
        answer: "Да, при определённых условиях..."
    },
];

const Arrow = ({ direction }) => {
    return (
        <svg
            width="16"
            height="27"
            viewBox="0 0 16 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${direction === "up" ? "rotate-180" : ""}`}
        >
            <path
                d="M7.46967 26.0303C7.76256 26.3232 8.23744 26.3232 8.53033 26.0303L13.3033 21.2574C13.5962 20.9645 13.5962 20.4896 13.3033 20.1967C13.0104 19.9038 12.5355 19.9038 12.2426 20.1967L8 24.4393L3.75736 20.1967C3.46447 19.9038 2.98959 19.9038 2.6967 20.1967C2.4038 20.4896 2.4038 20.9645 2.6967 21.2574L7.46967 26.0303ZM7.25 5.5L7.25 25.5L8.75 25.5L8.75 5.5L7.25 5.5Z"
                fill="#DA4533"
            />
        </svg>
    );
};

function Acardion() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq bg-black w-full">
            <div className="container max-w-[1280px] mx-auto px-[20px]">
                <div className="faq__content pt-[60px] pb-[60px]">
                    <h2 className="faq__title text-[24px] md:text-[32px] font-semibold text-white mb-[32px]">
                        Часто задаваемые вопросы
                    </h2>
                    <div className="faq__list flex flex-col gap-[12px]">
                        {faqs.map((faq, index) => (
                            <div key={index} className="answer">
                                <div
                                    className={`faq__item rounded-[8px] 
                                    ${openIndex === index ? "bg-[#2a2a2a]" : "bg-[#1a1a1a]"}`}
                                >
                                    <button
                                        className="faq__question flex justify-between items-center w-full cursor-pointer text-left p-[20px] text-[18px]  text-white"
                                        onClick={() => toggleOpen(index)}
                                    >
                                        <span  >{faq.question}</span>
                                        <Arrow direction={openIndex === index ? "up" : "down"} />
                                    </button>
                                </div>
                                {openIndex === index && (
                                    <p className="faq__answer p-[20px] text-gray-400 text-[16px]">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Acardion;
