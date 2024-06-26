import AnimatedText from "@/components/AnimatedText"
import {GithubIcon} from "@/components/Icons"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import muf from "../../public/images/projects/muf.jpeg"
import auth from "../../public/images/projects/auth.jpg"
import {motion} from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="flex w-full items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-4 dark:border-light dark:bg-dark dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 border-opacity-30 dark:border-opacity-30">
            <Link
                href={link}
                target="_blank"
                className="w-1/2 inline-block cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority={true}
                    sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={github}
                        target="_blank"
                        className="ml-4 sm:px-4 sm:text-base flex items-center bg-dark text-light p-2.5 px-6 w-64 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark hover:border-opacity-30 dark:hover:border-opacity-30 hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light lg:p-2 md:px-4 md:text-base justify-center delay-100 transition-all"
                    >
                        Visit The Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className="flex flex-col w-full items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 dark:border-light dark:text-light dark:bg-dark xs:p-4 border-opacity-30 dark:border-opacity-30">
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority={true}
                    sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base xs:text-sm">
                    {type}
                </span>
                <Link
                    href={github}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-xl md:text-base">
                        {title}
                    </h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={github}
                        target="_blank"
                        className="text-lg font-semibold hover:text-lime-200 underline underline-offset-2"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Sammy Shehter | Projects Page</title>
                <meta
                    name="discription"
                    content="Sammy Shehter projects page"
                />
            </Head>
            <TransitionEffect />
            <main className="w-full flex flex-col justify-center items-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="When imagination and knowledge work together!"
                        className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-16 lg:gap-8 md:gap-6">
                        <div className="col-span-12">
                            <FeaturedProject
                                github="https://github.com/SammyShehter/muf-infograph"
                                img={muf}
                                link="http://116.202.21.186/"
                                summary={`
                                A dynamic tool designed for broadcasting the game Werewolf on platforms like Twitch. Supports 8 simultaneous games with real-time updates. Built with a NodeJS backend, React frontend, and an optimized image handling function. Features a comprehensive backoffice for game management, ensuring instant synchronization across all clients. Serves a mid-range audience of ~1500 viewers.`}
                                title="Muf-Infograph"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Backend Project"
                                title="Auth Service"
                                img={auth}
                                link="https://auth.sammyshehter.com/info"
                                github="https://github.com/SammyShehter/auth-service"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="CLI App"
                                title="Images Combiner"
                                img={muf}
                                github="https://github.com/SammyShehter/combiner"
                                link="https://github.com/SammyShehter/combiner"
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                github="https://github.com/SammyShehter/Nuvola/"
                                img={muf}
                                link="https://nuvola.sammyshehter.com"
                                summary={`Blah blah blah.`}
                                title="CMS App"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Backend Project"
                                title="Auth Service"
                                img={muf}
                                link="https://auth.sammyshehter.com/info"
                                github="https://github.com/SammyShehter/auth-service"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Backend Project"
                                title="Auth Service"
                                img={muf}
                                link="https://auth.sammyshehter.com/info"
                                github="https://github.com/SammyShehter/auth-service"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
