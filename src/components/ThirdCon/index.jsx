import './style.scss'
import Consultation from '../Consultation'
import img1 from '../../assets/img/ThirdCon/third__img1.svg'
import img2 from '../../assets/img/ThirdCon/third__img2.svg'
import img3 from '../../assets/img/ThirdCon/third__img3.svg'

function ThirdCon(){
    return(
        <section className="thirdcon">
            <div className="container__thirdcon">
            <Consultation
            title="Не нашли, что искали?Оставьте заявку, мы вам поможем!"
              img1={img1}
              img2={img2}
              img3={img3}
            />
            </div>
        </section>
    )
}

export default ThirdCon