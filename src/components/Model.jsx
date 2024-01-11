import { motion } from "framer-motion"
import { styles } from "../styles"
import { EarthsModelCanvas } from "./canvas"


const Model = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 
        top-[120px] max-w-7xl mx-auto flex flex-row items-start pb-10`}>
            <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                <div className="w-1 sm:h-60 h-40 violet-gradient"/>
            </div>
            <div className="flex flex-row text-center bg-black bg-opacity-30">
                <h1 className={`${styles.heroHeadText}`}>
                    We are a research group that focuses on 
                    Computational Intelligence and Health.
                </h1>
            </div>
        </div>
        
        <EarthsModelCanvas className="sm:w-full"/>
    </section>
  )
}

export default Model