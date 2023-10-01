import AnimatedText from "@/components/AnimatedText"
import {GithubIcon} from "@/components/Icons"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import projectOne from "../../public/images/projects/1.jpg"
import {motion} from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="flex w-full items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-4 dark:border-light dark:bg-dark dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4">
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
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={github}
                        target="_blank"
                        className="bg-dark ml-4 rounded-lg text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light sm:px-4 sm:text-base"
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
        <article className="flex flex-col w-full items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 dark:border-light dark:text-light dark:bg-dark xs:p-4">
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
                    href={link}
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
                        className="p-2 text-lg font-semibold hover:underline-offset-2 hover:underline"
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
                        text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-16 lg:gap-8 md:gap-6">
                        <div className="col-span-12">
                            <FeaturedProject
                                github="/"
                                img={projectOne}
                                link="/"
                                summary={`
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency.`}
                                title="Crypto Screener Application"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                github="/"
                                img={projectOne}
                                link="/"
                                summary={`
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency.`}
                                title="Crypto Screener Application"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                github="/"
                                img={projectOne}
                                link="/"
                                summary={`
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency.`}
                                title="Crypto Screener Application"
                                type="Featured Project"
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                github="/"
                                img={projectOne}
                                link="/"
                                summary={`
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency.`}
                                title="Crypto Screener Application"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                github="/"
                                img={projectOne}
                                link="/"
                                summary={`
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency.`}
                                title="Crypto Screener Application"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                github="/"
                                img={projectOne}
                                link="/"
                                summary={`
                                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency.`}
                                title="Crypto Screener Application"
                                type="Featured Project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
