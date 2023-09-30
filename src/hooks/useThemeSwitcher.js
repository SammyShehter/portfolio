import {useEffect, useState} from "react"

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)"
    const [theme, setTheme] = useState("init")

    useEffect(() => {
        const darkModePref = window.localStorage.getItem("theme")
        const mediaQuery = window.matchMedia(preferDarkQuery)

        const defaultByMediaQuery = mediaQuery.matches ? "dark" : "false"

        setTheme(darkModePref ? darkModePref : defaultByMediaQuery)
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
            return
        }
        if (theme === "light") {
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    return [theme, setTheme]
}

export default useThemeSwitcher
