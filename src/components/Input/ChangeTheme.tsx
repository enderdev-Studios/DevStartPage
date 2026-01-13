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
        <button className="dark:bg-[#181825] dark:text-[#cdd6f4] text-[#4c4f69] bg-[#e6e9ef] py-3.5 px-4 cursor-pointer rounded-xl font-bold" onClick={handleChange}>
            <i className={theme === "dark" ? 'bx bx-moon' : "bx bx-sun"} ></i>
            &nbsp;
            {theme === "dark" ? "Dark" : "Light"} Theme
        </button>

    );
};
