import { useEffect, useState } from "react";
import { LocalStorageKeys } from "../../constants/constants";
import { useMobile } from "../../Hooks/useMobile";

export default function ChangeTheme() {
    const isMobile = useMobile()
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem(LocalStorageKeys.Theme);
        if (storedTheme) return storedTheme;
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark";
        }
        return "light";
    })

    useEffect(() => {
        if (theme === "dark") {
            return document.querySelector("html")?.classList.add("dark");
        } else {
            return document.querySelector("html")?.classList.remove("dark");
        }
    }, [theme])
    window.localStorage.setItem(LocalStorageKeys.Theme, theme)
    const handleChange = (e: any) => {
        e.stopPropagation();
        setTheme(prevtheme => prevtheme === "dark" ? "light" : "dark")
    }
    return (
        <button className="subtext-1 surface-0 changeTheme max-md:w-10 max-md:h-10 max-md:text-base max-md:font-bold max-md:px-2 max-md:py-2 text-center flex justify-center items-center max-md:mt-0.5" onClick={handleChange}>
            <i className={theme === "dark" ? 'bx bx-moon max-md:text-sm max-md:font-bold' : "bx bx-sun max-md:text-sm max-md:font-bold"} ></i>
            {!isMobile ? <span> &nbsp; {theme === "dark" ? "Dark" : "Light"} Theme </span> : null }
        </button>

    );
};
