
import Hero from "../../components/Hero"
import Experience from '../../components/Experience'
import Sertificate from "../../components/Sertificate"
import Solution from "../../components/Solution"
import Cases from "../../components/Cases"
import Quiz from "../../components/Quiz"
import Experts from "../../components/Experts"
import Consultation from "../../components/Consultation"
import ProdCase from "../../pages/ProdCase/ProductCase"
import Register from "../../pages/Register/Register"
import Numbers from "../../pages/Numbers/Numbers"





export const Home = () => {
    return (

        <main className="bg-[#1B1B1B]">
            <Hero />
            <Experience />
            <Sertificate />
            <Solution />
            <Quiz />
            <Cases />   
            <Experts />
            <Consultation />
            <ProdCase />
            <Register />
            <Numbers />

        </main>
    )
}
