import { useState } from "react";
import searchData from './search.json'
// import { Faq } from "../../pages/Faq/Faq";
import "./style.css"

import search from "../../assets/img/Cards/search.svg";
// import { Filter } from "lucide-react";

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


export const Search = () => {
    console.log(searchData.faq);
    const [openIndex, setOpenIndex] = useState(0);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Все услуги");
    const categories = searchData.filters
    console.log(categories);
    console.log(selectedCategory);

    const filteredServices = searchData.faq.filter(
        (service) =>
            (selectedCategory === "Все услуги" || service.category === selectedCategory) &&
            service.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredServices);

    return (
        <>
            <section className="search">
                <div className="container mx-auto">
                <div className="search__wrapper">
                    <img src={search} alt="Поиск" className="search__icon" />
                    <input
                        type="text"
                        placeholder="Начните вводить слово"
                        className="search__input  "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="categories__container">
                    <p className="category">КАТЕГОРИИ</p>
                    <label className=" rounded-lg " >
                        {categories.map((category) => (

                            <button
                                key={category}
                                className={`category__button cursor-pointer  ${selectedCategory === category ? "active" : ""}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </label>
                </div>
                <div className="faq bg-black w-full">
                    <div className="container max-w-[1280px] mx-auto px-[20px]">
                        <div className="faq__content pt-[60px] pb-[60px]">
                            <h2 className="faq__title text-[24px] md:text-[32px] font-semibold text-white mb-[32px]">
                                Часто задаваемые вопросы
                            </h2>
                            <div className="faq__list flex flex-col gap-[12px]">
                                {selectedCategory === "Все услуги" ? (searchData.faq.map((faq, index) => (
                                    <div key={index} className="answer w-[598px]">
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
                                ))) : (filteredServices.map((faq, index) => (
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
                                )))}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}