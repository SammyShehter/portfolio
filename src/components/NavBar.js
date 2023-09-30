import React, {useState} from "react"
import Logo from "./Logo"
import Link from "next/link"
import {useRouter} from "next/router"
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon} from "./Icons"
import {motion} from "framer-motion"
import useThemeSwitcher from "@/hooks/useThemeSwitcher"

const CustomMobileLink = ({href, title, toggle, className = ""}) => {
    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:tet-dark my-2 dark:text-dark`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-light absolute -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
                    router.asPath === href ? "w-full" : "w-0"
                }`}
            >
                &nbsp;
            </span>
        </button>
    )
}

const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
                    router.asPath === href ? "w-full" : "w-0"
                }`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    const [theme, setTheme] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
            <button
                className={`flex-col justify-center items-center hidden lg:flex`}
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-1"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
            </button>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink
                        href="/projects"
                        title="Projects"
                        className="mx-4"
                    />
                    <CustomLink
                        href="/articles"
                        title="Articles"
                        className="ml-4"
                    />
                </nav>
                <nav className="flex justify-center items-center flex-wrap">
                    <motion.a
                        href="https://github.com/SammyShehter"
                        target={"_blank"}
                        className="w-6 mr-3"
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.7}}
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/sammy-shehter"
                        className="w-6 ml-3"
                        target={"_blank"}
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.7}}
                    >
                        <GithubIcon />
                    </motion.a>
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                            theme === "light"
                                ? "bg-light text-dark"
                                : "bg-dark text-light"
                        }`}
                    >
                        {theme === "dark" ? (
                            <SunIcon className="fill-dark" />
                        ) : (
                            <MoonIcon className="fill-dark" />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen && (
                <motion.div
                    initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.2}}
                    className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                >
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/projects"
                            title="Projects"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/articles"
                            title="Articles"
                            toggle={handleClick}
                        />
                    </nav>
                    <nav className="flex justify-center items-center flex-wrap mt-2">
                        <motion.a
                            href="https://github.com/SammyShehter"
                            target={"_blank"}
                            className="w-6 mr-3 sm:mx-1"
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.7}}
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/sammy-shehter"
                            className="w-6 ml-3 sm:mx-1"
                            target={"_blank"}
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.7}}
                        >
                            <GithubIcon />
                        </motion.a>
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                                theme === "light"
                                    ? "bg-light text-dark"
                                    : "bg-dark text-light"
                            }`}
                        >
                            {theme === "dark" ? (
                                <SunIcon className="fill-dark" />
                            ) : (
                                <MoonIcon className="fill-dark" />
                            )}
                        </button>
                    </nav>
                </motion.div>
            )}

            <div className="absolute left-[50%] top-2 -translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
