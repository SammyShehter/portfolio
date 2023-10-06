import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import AnimatedNumber from "@/components/AnimatedNumber"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"

const about = () => {
    return (
        <>
            <Head>
                <title>Sammy Shehter | About Page</title>
                <meta name="discription" content="Sammy Shehter about page" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-14">
                    <AnimatedText
                        text={`Driven by Passion, Defined by Purpose!`}
                        className="mb-16 lg:text-6xl sm:text-5xl xs:text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            <p className="font-medium">
                                {`Hello, I'm Sammy Shehter, a web developer with a knack for Kotlin development. I've spent 4 years crafting digital solutions that prioritize users.`}
                            </p>
                            <p className="font-medium my-4">
                                {`- I see development as more than just coding; it's about addressing challenges and ensuring a seamless user experience.`}
                            </p>
                            <p className="font-medium">
                                {`- Whether it's a website, mobile app, or any digital tool, I infuse my dedication to quality and user-focus into every task. I'm eager to apply my expertise to your upcoming project.`}
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 border-opacity-30 dark:border-opacity-30">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light sm:hidden opacity-30" />
                            <Image
                                src={profilePic}
                                alt="Sammy Shehter"
                                className="w-full h-auto rounded-2xl"
                                priority={true}
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-evenly xl:col-span-8 xl:flex-row md:order-3">
                            <div className="flex flex-col items-end justify-center">
                                <AnimatedNumber
                                    value={20}
                                    className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl xl:mx-auto"
                                    specialCharacter="+"
                                />
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-base sm:text-sm xl:text-center xs:text-xs">
                                    projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <AnimatedNumber
                                    value={4}
                                    className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl xl:mx-auto"
                                    specialCharacter="+"
                                />
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-base sm:text-sm xl:text-center xs:text-xs">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about
