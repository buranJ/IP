
import Hero from "../../components/Hero"
import Experience from '../../components/Experience'
import Sertificate from "../../components/Sertificate"
import Solution from "../../components/Solution"

import Quiz from "../../components/Quiz"
import Experts from "../../components/Experts"


export const Home = () => {
    return (

        <main className="bg-[#1B1B1B]">
            <Hero />
            <Experience />
            <Sertificate />
            <Solution />
            <Quiz />
            <Solution />
            <Experts />
        </main>
    )
}
