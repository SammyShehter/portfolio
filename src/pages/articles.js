import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, {useRef} from "react"
import article1 from "../../public/images/articles/create modal component in react using react portals.png"
import article2 from "../../public/images/articles/pagination component in reactjs.jpg"
import {motion, useMotionValue} from "framer-motion"

const FramerImage = motion(Image)

const MovingImage = ({title, img, link}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const ref = useRef(null)

    function handleMouse(event) {
        ref.current.style.display = "inline-block"
        x.set(event.pageX - 125)
        y.set(1)
    }

    function handleMouseLeave() {
        ref.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (
        <Link
            target="_blank"
            href={link}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="font-semibold capitalize text-xl hover:underline">
                {title}
            </h2>
            <FramerImage
                style={{x: x, y: y}}
                initial={{opacity: 0}}
                whileInView={{opacity: 1, transition: {duration: 0.2}}}
                ref={ref}
                src={img}
                alt={title}
                className="z-10 w-96 h-auto hidden absolute rounded-lg"
            />
        </Link>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl shadow-2xl">
            <Link
                href={link}
                target="_blank"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold">{time}</span>
        </li>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li
            initial={{y: 200}}
            whileInView={{y: 0, transition: {duration: 0.5, ease: "easeInOut"}}}
            viewport={{once: true}}
            className="w-full p-4 py-6 my-4 rounded-2xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark shadow-xl"
        >
            <MovingImage img={img} link={link} title={title} />
            <span className="text-primary font-semibold pl-4">{date}</span>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Sammy Shehter | Articles Page</title>
                <meta
                    name="discription"
                    content="Sammy Shehter articles page"
                />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
                <Layout className="pt-14">
                    <AnimatedText
                        text="Words Can Change The World!"
                        className="mb-16"
                    />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle
                            img={article1}
                            link="/"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                        />

                        <FeaturedArticle
                            img={article2}
                            link="/"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        All articles
                    </h2>
                    <ul>
                        <Article
                            date="Sep 27"
                            img={article1}
                            link="/"
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        />
                        <Article
                            date="Sep 27"
                            img={article1}
                            link="/"
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        />
                        <Article
                            date="Sep 27"
                            img={article1}
                            link="/"
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        />
                        <Article
                            date="Sep 27"
                            img={article1}
                            link="/"
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        />
                        <Article
                            date="Sep 27"
                            img={article1}
                            link="/"
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        />
                        <Article
                            date="Sep 27"
                            img={article1}
                            link="/"
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles
