import AnimatedText from "@/components/AnimatedText"
import Head from "next/head"
import React from "react"

const about = () => {
    return (
        <>
            <Head>
                <title>
                    Sammy Shehter | About Page
                </title>
                <meta name="discription" content="Sammy Shehter about page" />
            </Head>
            <main className="flex w-full">

            <AnimatedText text="Passion Fuels Purpose!"/>
            </main>
        </>
    )
}

export default about
