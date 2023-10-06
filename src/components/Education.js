import React, {useRef} from "react"
import {motion, useScroll} from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return (
        <li
            ref={ref}
            className="my-5 first:mt-0 last:mb-0 w-[70%] sm:w-[75%] xs:w-[75%] flex flex-col items-start justify-between"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{y: 70}}
                whileInView={{y: 0}}
                transition={{duration: 0.5, type: "spring"}}
                viewport={{once: true}}
            >
                <h3 className="capitalize font-bold text-2xl lg:text-xl sm:text-lg xs:text-base">
                    {type}&nbsp;
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    })
    return (
        <div ref={ref} className="">
            <h2 className="font-bold text-6xl mt-32 w-full text-center md:text-5xl xl:mb-16 xl:mt-32 mb-16 lg:text-5xl sm:text-4xl xs:text-3xl sm:mb-8 sm:mt-16">
                Education
            </h2>

            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-2 w-[4px] bg-dark h-full origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[19px] opacity-30"
                />
                <ul className="w-full flex flex-col items-center justify-between last:pb-10">
                    <Details
                        type="BA in Economics and Management"
                        place="Ariel University"
                        time="2016-2020"
                    />
                    <Details
                        type="Diploma in PC Hardware and Software solutions"
                        place="Sitrin Hi-Tech College"
                        time="2011-2014"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
