function Request() {
    return (
        <section className="request">
            <div className="container">
                <div className="request__content">
                    <div className="request__text">
                        <h1 className="title__request">Оставьте заявку</h1>
                        <p className="description__request">Укажите свои данные, и наш специалист свяжется с вами</p>
                        <div className="inputs">
                            <div className="input__name">
                                <p className="pre__title">Как к вам обращаться</p>
                                <input type="text" className="request__name" placeholder="Введите имя" />
                            </div>
                            <div className="input__number">
                                <p className="pre__title">Номер телефона / WhatsApp</p>
                                <input type="tel" className="request__number" placeholder="Введите номер телефона" />
                            </div>
                            <div className="input__mail">
                                <p className="pre__title">Почта</p>
                                <input type="email" className="request__mail" placeholder="Введите email" />
                            </div>
                            <div className="input__comment">
                                <p className="pre__title">Запрос</p>
                                <input type="text" className="request__comment" />
                            </div>
                            <div className="input__submit">
                                <input type="checkbox" className="request__check" />
                                <p className="check__description">Я принимаю соглашение на обработку персональных данных и политику конфиденциальности</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Request