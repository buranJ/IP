import { useState } from "react";
import searchData from "./search.json";
import "./style.css";

import search from "../../assets/img/Cards/search.svg";
import topImg from "../../assets/img/Faq/img.png";

// const arr2 = ({ direction }) => {
//   return (
//     <svg
//       width="16"
//       height="9"
//       viewBox="0 0 16 9"
//       fill="none"
//       className={`transition-transform duration-300 ${
//         direction === "up" ? "rotate-180" : ""
//       }`}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M1 1L8 8L15 1" stroke="white" />
//     </svg>
//   );
// };

const Arrow = ({ direction }) => {
  return (
    <svg
      width="16"
      height="27"
      viewBox="0 0 16 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${
        direction === "up" ? "rotate-180" : ""
      }`}
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
  const categories = searchData.filters;
  console.log(categories);
  console.log(selectedCategory);

  const filteredServices = searchData.faq.filter(
    (service) =>
      (selectedCategory === "Все услуги" ||
        service.category === selectedCategory) &&
      service.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredServices);

  return (
    <>
      <section className="search">
        <div className="container mx-auto">
          <div className="search__content">
            <div className="search__top-wrap">
              <div className="search__top-wrapper">
                <h2 className="search__top-title xl:text-[38px]">FAQ</h2>
              </div>
              <img src={topImg} alt="Img" className="search__top-img hidden xl:block" />
            </div>

            <div className="search__wrapper-faq">
              <div className="faq-wrapper-wrap">
                <input
                  type="text"
                  placeholder="Начните вводить слово"
                  className="search__input-faq  "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={search} alt="Поиск" className="search__icon-faq" />
              </div>
            </div>
            <div className="categories__container-faq categories__container mx-[20px] ">
              <p className="category  pl-[10px] text-[#8A8A8A] font-medium">
                КАТЕГОРИИ
              </p>
              <label className="category__buttons rounded-[8px]">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category__button-faq cursor-pointer  ${
                      selectedCategory === category ? "active-faq" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </label>
            </div>
            <div className="faq-container flex flex-col">
              <div className="faq bg-black w-[91%] mx-[20px] xl:w-[598px]">
                <div className="container max-w-[1280px] mx-auto px-[20px]">
                  <div className="faq__content pt-[60px] pb-[60px]">
                    <div className="faq__list flex flex-col gap-[12px] xl:max-h-[700px] xl:flex-wrap">
                      {selectedCategory === "Все услуги"
                        ? searchData.faq.map((faq, index) => (
                            <div
                              key={index}
                              className="faq-answer min-h-[119px]"
                            >
                              <div
                                className={`faq__item w-[100%] rounded-[8px] min-h-[119px]
                                    ${
                                      openIndex === index
                                        ? "bg-[#2a2a2a]"
                                        : "bg-[#1a1a1a]"
                                    }`}
                              >
                                <button
                                  className="faq__question min-h-[119px] relative flex justify-between items-center w-full cursor-pointer text-left p-[20px] text-[14px] font-medium md:text-[18px] text-[#8A8A8A]"
                                  onClick={() => toggleOpen(index)}
                                >
                                  <div className="faq__question-btns absolute flex left-0 top-0 gap-[10px]">
                                    <button className="faq__question-btn">
                                      Базы данных
                                    </button>
                                    <button className="faq__question-btn">
                                      Дизайн
                                    </button>
                                  </div>
                                  <span>{faq.question}</span>
                                  <Arrow
                                    direction={
                                      openIndex === index ? "up" : "down"
                                    }
                                  />
                                </button>
                              </div>
                              {openIndex === index && (
                                <p className="faq__answer p-[20px] text-gray-400 text-[16px]">
                                  {faq.answer}
                                </p>
                              )}
                            </div>
                          ))
                        : filteredServices.map((faq, index) => (
                            <div
                              key={index}
                              className="faq-answer min-h-[119px]"
                            >
                              <div
                                className={`faq__item w-[100%] rounded-[8px] min-h-[119px]
                                  ${
                                    openIndex === index
                                      ? "bg-[#2a2a2a]"
                                      : "bg-[#1a1a1a]"
                                  }`}
                              >
                                <button
                                  className="faq__question min-h-[119px] relative flex justify-between items-center w-full cursor-pointer text-left p-[20px] text-[14px] font-medium md:text-[18px] text-[#8A8A8A]"
                                  onClick={() => toggleOpen(index)}
                                >
                                  <div className="faq__question-btns absolute flex left-0 top-0 gap-[10px]">
                                    <button className="faq__question-btn">
                                      Базы данных
                                    </button>
                                    <button className="faq__question-btn">
                                      Дизайн
                                    </button>
                                  </div>
                                  <span>{faq.question}</span>
                                  <Arrow
                                    direction={
                                      openIndex === index ? "up" : "down"
                                    }
                                  />
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
