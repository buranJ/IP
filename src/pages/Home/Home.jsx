
import Hero from "../../components/Hero"
import Experience from '../../components/Experience'
import Sertificate from "../../components/Sertificate"
import Solution from "../../components/Solution"
import Cases from "../../components/Cases"
import Quiz from "../../components/Quiz"
import Experts from "../../components/Experts"
import Consultation from "../../components/Consultation"


export const Home = () => {
    return (

        <main className="bg-[#1B1B1B]">
            <Hero />
            <Experience />
            <Sertificate />
            <Solution />
            <Quiz />
            <Cases/>
            <Experts />
            <Consultation/>
        </main>
    )
}
