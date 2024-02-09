import Layout from "./Layout"
import Link from "next/link"
import Logo from "./Logo"

const Footer = () => {
    return (
        <footer className="w-full font-medium text-lg dark:text-light sm:text-base">
            <Layout className="py-10 xl:py-9 lg:py-8 md:py-7 sm:py-6 xs:py-5 px-64 xl:px-48 flex items-center justify-between lg:flex-col">
                <span>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
                <div className="flex items-center lg:py-2">
                    Build With
                    <span className="text-primary text-2xl px-1 dark:text-primaryDark">
                        &#9825;
                    </span>
                    by&nbsp;
                    <Link href="/" className="underline underline-offset-2">
                        Sammy Shehter
                    </Link>
                </div>
                <Logo />
            </Layout>
        </footer>
    )
}

export default Footer
