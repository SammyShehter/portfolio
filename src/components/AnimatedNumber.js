import React, {useEffect, useRef} from "react"
import {useInView, useMotionValue, useSpring} from "framer-motion"

const AnimatedNumber = ({value, className = "", specialCharacter = ""}) => {
    const numRef = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        duration: 4000,
    })

    const isInView = useInView(numRef, {once: true})

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, motionValue, value])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (numRef.current && latest.toFixed(0) <= value) {
                numRef.current.textContent = `${latest.toFixed(
                    0
                )}${specialCharacter}`
            }
        })
    }, [springValue, value, specialCharacter])

    return <span ref={numRef} className={className}></span>
}

export default AnimatedNumber
