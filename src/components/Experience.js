import React, {useRef} from "react"
import {motion, useScroll} from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({position, company, companyLink, time, address, work}) => {
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
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="capitalize text-primary dark:text-primaryDark"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    })
    return (
        <div ref={ref} className="">
            <h2 className="font-bold text-6xl mt-32 w-full text-center md:text-5xl xl:mb-16 xl:mt-32 mb-16 lg:text-5xl sm:text-4xl xs:text-3xl sm:mb-8 sm:mt-16">
                Experience
            </h2>

            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-2 w-[4px] bg-dark h-full origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[19px] opacity-30"
                />
                <ul className="w-full flex flex-col items-center justify-between">
                    <Details
                        position="Fullstack Developer"
                        company="PayPlus"
                        time="2023-Present"
                        companyLink="https://www.payplus.co.il"
                        work="Worked with a team to develop new features for PayPlus's payment system. Our tasks included expanding the business logic, enhancing code quality and reliability, creating new tools for developers, and scaling the system using Kubernetes."
                        address="Holon, IL"
                    />
                    <Details
                        position="Backend Developer"
                        company="Rapyd"
                        time="2021-2023"
                        companyLink="https://www.rapyd.com"
                        work="Developed a REST API for financial tasks and an Issuing platform (3DS, ACS) using NodeJS/TS/Python, Express, both MySQL and MongoDB databases and SQS for better performance. Addressed bugs in the Rapyd core API, introduced new features, migrated older services to Kubernetes, and documented complex functions."
                        address="Tel-Aviv, IL"
                    />
                    <Details
                        position="Fullstack Developer"
                        company="Eyeclick"
                        time="2019-2021"
                        companyLink="https://www.eyeclick.com"
                        work="Transitioned from monolith backend to microservices using MongoDB, Docker, and Kubernetes. Set up an ecosystem with KOPS and built a CI/CD process using Jenkins. Developed an Analytics portal for Eyeclick customers, maintained and enhanced the Backoffice functionality using NodeJS, React, and Redux."
                        address="Ramat Gan, IL"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
