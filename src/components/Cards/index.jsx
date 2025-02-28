import React, { useState } from "react";
import "./style.scss";

import img1 from "../../assets/img/Cards/objects1.png";
import img2 from "../../assets/img/Cards/objects2.png";
import img3 from "../../assets/img/Cards/Vector3.png";
import img4 from "../../assets/img/Cards/Vector4.png";
import img5 from "../../assets/img/Cards/objects5.png";
import img6 from "../../assets/img/Cards/Vector6.png";
import img7 from "../../assets/img/Cards/Vector7.png";
import img8 from "../../assets/img/Cards/objects8.png";
import search from "../../assets/img/Cards/search.svg";

const servicesData = [
    { id: 1, title: "Регистрация товарного знака", category: "Товарные знаки", image: img1 },
    { id: 2, title: "Предварительная проверка обозначения", category: "Товарные знаки", image: img2 },
    { id: 3, title: "Международная регистрация", category: "Патенты", image: img3 },
    { id: 4, title: "Продление товарного знака", category: "Товарные знаки", image: img4 },
    { id: 5, title: "Изменение сведений", category: "IT", image: img5 },
    { id: 6, title: "Получение дубликата", category: "Защита", image: img6 },
    { id: 7, title: "Ответ на уведомление", category: "Управление", image: img7 },
    { id: 8, title: "Внесение знака в реестр ФТС", category: "Обучение", image: img8 },
];

const categories = ["Все услуги", "Товарные знаки", "Патенты", "Дизайн", "IT", "Защита", "Управление", "Обучение"];

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Все услуги");

    const filteredServices = servicesData.filter(
        (service) =>
            (selectedCategory === "Все услуги" || service.category === selectedCategory) &&
            service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="services__container">
            <div className="container mx-auto">
                <div className="services__header">
                    <h2 className="services__h2">Все услуги</h2>
                    <div className="search__wrapper">
                        <img src={search} alt="Поиск" className="search__icon" />
                        <input
                            type="text"
                            placeholder="Начните вводить слово"
                            className="search__input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="categories__container">
                    <p className="category">КАТЕГОРИИ</p>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category__button ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="services__grid">
                    {filteredServices.map((service) => (
                        <div key={service.id} className="service__card">
                            <img src={service.image} alt={service.title} className="service__image" />
                            <div className="service__content">
                                <div className="service-header__content">
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default App;
