import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {useEffect, useRef} from "react"
import article1 from "../../public/images/articles/2.jpg"
import article2 from "../../public/images/articles/weakmap2.jpg"
import article3 from "../../public/images/articles/weakmap3.jpg"
import {motion, useMotionValue} from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"
import {getAllPosts} from "@/repo"

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
                className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
                priority={true}
                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
            />
        </Link>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl shadow-2xl dark:text-light dark:border-light dark:bg-dark">
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
                    priority={true}
                    sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">
                {time}
            </span>
        </li>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li
            initial={{y: 200}}
            whileInView={{y: 0, transition: {duration: 0.5, ease: "easeInOut"}}}
            viewport={{once: true}}
            className="w-full p-4 py-6 my-4 rounded-2xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark shadow-xl dark:bg-dark dark:text-light dark:border-light sm:flex-col"
        >
            <MovingImage img={img} link={link} title={title} />
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
                {date}
            </span>
        </motion.li>
    )
}

export async function getStaticProps() {
    const data = await getAllPosts()
    return {props: {data}}
}

export default function Page({data}) {
    return (
        <>
            <Head>
                <title>Sammy Shehter | Articles Page</title>
                <meta
                    name="discription"
                    content="Sammy Shehter articles page"
                />
            </Head>
            <TransitionEffect />
            <main className="w-full flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-14">
                    <AnimatedText
                        text="Words Can Change The World!"
                        className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
                    />
                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        <FeaturedArticle
                            img={article3}
                            link={`https://blogue.sammyshehter.com/posts/${data[0].slug}`}
                            summary={data[0].description}
                            time="9 min read"
                            title={data[0].title}
                        />

                        <FeaturedArticle
                            img={article2}
                            link={`https://blogue.sammyshehter.com/posts/${data[1].slug}`}
                            summary={data[1].description}
                            time="9 min read"
                            title={data[1].title}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        All articles
                    </h2>
                    <ul>
                        <Article
                            date={data[2].date}
                            img={article1}
                            link={`https://blogue.sammyshehter.com/posts/${data[2].slug}`}
                            title={data[2].title}
                        />
                        <Article
                            date={data[3].date}
                            img={article1}
                            link={`https://blogue.sammyshehter.com/posts/${data[3].slug}`}
                            title={data[3].title}
                        />
                        <Article
                            date={data[4].date}
                            img={article1}
                            link={`https://blogue.sammyshehter.com/posts/${data[4].slug}`}
                            title={data[4].title}
                        />
                        <Article
                            date={data[5].date}
                            img={article1}
                            link={`https://blogue.sammyshehter.com/posts/${data[5].slug}`}
                            title={data[5].title}
                        />
                        <Article
                            date={data[6].date}
                            img={article1}
                            link={`https://blogue.sammyshehter.com/posts/${data[6].slug}`}
                            title={data[6].title}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}
