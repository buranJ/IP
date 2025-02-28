import './style.scss'
import Consultation from '../Consultation'
import img1 from '../../assets/img/DoubleCon/mini__con1.svg'
import img2 from '../../assets/img/DoubleCon/mini__con2.svg'
import img3 from '../../assets/img/DoubleCon/mini__con3.svg'
function DoubleCon(){
    return(
        <section className="doublecon bg-[#da4533]flex justify-center">
            <div className="container-doublecon">
            <Consultation 
          title={
            <>
              Не нашли нужную услугу?<br />
              Оставьте заявку, мы вам поможем!
            </>
          }
           img1={img1}
           img2={img2}
           img3={img3}
           titleClass=''
        />
            </div>
        </section>
    )
}

export default DoubleCon