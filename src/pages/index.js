import Head from "next/head"
import Layout from "@/components/Layout"
import Image from "next/image"
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import {LinkArrow} from "@/components/Icons"
import HireMe from "@/components/HireMe"
import TransitionEffect from "@/components/TransitionEffect"
export default function Home() {
    return (
        <>
            <Head>
                <title>Sammy Shehter Portfolio</title>
                <meta name="description" content="Sammy Shehter Portfolio" />
            </Head>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen md:min-h-min dark:text-light">
                <Layout className="pt-0 md:pt-16 sm:py-8">
                    <div className="flex items-center justify-between w-full lg:flex-col md:flex-col-reverse">
                        <div className="w-1/2 md:w-full">
                            <Image
                                priority={true}
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                50vw"
                                src={profilePic}
                                alt="Sammy Shehter"
                                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text="Making Ideas Real with Code."
                                className="text-left  text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                As an experienced full-stack developer, I
                                specialize in transforming visions into dynamic
                                web solutions. Dive into my recent endeavors and
                                insights, highlighting my proficiency.
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center justify-start xl:justify-center w-full">
                                <Link
                                    href="/SammyShehterCV.pdf"
                                    target="_blank"
                                    download={true}
                                    className="flex items-center bg-dark text-light p-2.5 px-6 w-64 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark hover:border-opacity-30 dark:hover:border-opacity-30 hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light lg:p-2 md:px-4 md:text-base justify-center delay-100 transition-all"
                                >
                                    Resume <LinkArrow className="ml-1" />
                                </Link>
                                <Link
                                    href="mailto:sammyshehter@gmail.com"
                                    className="flex items-center bg-dark text-light p-2.5 px-6 w-64 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark hover:bg-light hover:border-opacity-30 dark:hover:border-opacity-30 hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light lg:p-2 md:px-4 md:text-base justify-center ml-8 md:ml-4 delay-100 transition-all"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe />
            </main>
        </>
    )
}
