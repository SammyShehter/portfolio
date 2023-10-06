import React from "react"
import {motion} from "framer-motion"
const Skill = ({name, x, y}) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark, cursor-pointer absolute py-3 px-6 dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:py-0.5 sm:px-1 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
            whileHover={{scale: 1.05}}
            initial={{x: 0, y: 0}}
            whileInView={{x, y, transition: {duration: 1.5}}}
            viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-6xl mt-32 w-full text-center md:text-5xl xl:mb-16 xl:mt-32 mb-16 lg:text-5xl sm:text-4xl xs:text-3xl sm:mb-8 sm:mt-16">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark xl:h-[80vh] lg:h-[70vh] md:h-[55vh] sm:h-[45vh] xs:h-[35vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark, cursor-pointer absolute dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{scale: 1.05}}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-20vw" y="5vw" />
                <Skill name="Linux" x="-35vw" y="0vw" />
                <Skill name="SCSS" x="-5vw" y="-15vw" />
                <Skill name="JavaScript" x="25vw" y="14vw" />
                <Skill name="NodeJS" x="0vw" y="16vw" />
                <Skill name="Kotlin" x="-25vw" y="-18vw" />
                <Skill name="ReactJS" x="15vw" y="-20vw" />
                <Skill name="SQL" x="35vw" y="-10vw" />
                <Skill name="Docker" x="20vw" y="0vw" />
                <Skill name="NoSQL" x="0vw" y="-30vw" />
                <Skill name="Firebase" x="-25vw" y="23vw" />
                <Skill name="K8s" x="18vw" y="24vw" />
            </div>
        </>
    )
}

export default Skills
