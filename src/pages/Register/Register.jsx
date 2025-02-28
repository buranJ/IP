const cards = [
  {
    id: 1,
    title: "Проверка бренда",
    description:
      "Оценка вероятности регистрации, выявление знаков, которые могут помешать регистрации",
  },
  {
    id: 2,
    title: "Подготовка отчета",
    description:
      "Проведение анализа по всем основаниям для отказа в регистрации знака",
  },
  {
    id: 3,
    title: "Рекомендации",
    description:
      "Подготовка выводов и рекомендаций для регистрации товарного знака",
  },
];
// import Process from '../../components/Process'
import { Product } from '../../components/Product'

export const Register = () => {
  return (
    <>
      <div className="Register">
        {/* <Process/> */}
        <Product data={cards} />
      </div>
    </>
  )
}