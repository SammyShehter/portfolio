import {motion} from "framer-motion"
import React from "react"

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 dark:bg-dark bg-primaryDark"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{duration: 0.8, ease: "easeInOut"}}
                exit={{x:["0%", "100%"], width: ["0%", "100%"]}}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 opacity-60 dark:bg-dark bg-primaryDark"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 opacity-30 dark:bg-light"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
            />
        </>
    )
}

export default TransitionEffect
