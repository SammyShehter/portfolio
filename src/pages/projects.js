import AnimatedText from "@/components/AnimatedText"
import {GithubIcon} from "@/components/Icons"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import projectOne from "../../public/images/projects/crypto-screener-cover-image.jpg"

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="flex w-full items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link href={github} target="_blank" className="bg-dark ml-4 rounded-lg text-light p-2 px-6 text-lg font-semibold">
                        Visit The Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github, summary}) => {
    return (
        <article className="flex w-full items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className="w-full flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">summary</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link href={github} target="_blank" className="bg-dark ml-4 rounded-lg text-light p-2 px-6 text-lg font-semibold">
                        Visit
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
            <main className="w-full mb-16 flex flex-col justify-center items-center">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
                    <div className="grid grid-cols-12 gap-24">
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
                        <div className="col-span-6"><Project /></div>
                        <div className="col-span-6"><Project /></div>

                        <div className="col-span-12">Featured Project</div>
                        <div className="col-span-6">Featured Three</div>
                        <div className="col-span-6">Featured Four</div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
