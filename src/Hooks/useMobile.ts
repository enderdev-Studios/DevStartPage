import { useState, useEffect } from "react"

export function useMobile() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const [isMobile, setMobile] = useState(false)
    useEffect(() => {
        const handleMedia = (e: MediaQueryListEvent) => setMobile(e.matches);
        setMobile(mediaQuery.matches); 
        mediaQuery.addEventListener("change", handleMedia);
        return () => mediaQuery.removeEventListener("change", handleMedia);
    }, [mediaQuery])

    return isMobile;
}