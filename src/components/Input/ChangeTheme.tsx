import { useEffect, useState } from "react";
import { LocalStorageKeys } from "../../constants/constants";

export default function ChangeTheme() {
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
        <button className="subtext-1 surface-0 dark:hover:bg-overlay-mocha-0 hover:bg-overlay-latte-0 py-3.5 px-4 cursor-pointer rounded-xl font-bold" onClick={handleChange}>
            <i className={theme === "dark" ? 'bx bx-moon' : "bx bx-sun"} ></i>
            &nbsp;
            {theme === "dark" ? "Dark" : "Light"} Theme
        </button>

    );
};
