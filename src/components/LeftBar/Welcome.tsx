import { useMobile } from "../../Hooks/useMobile";
import WeatherWidget from "./Weather";

interface WelcomeProps {
    children: React.ReactNode;
    city: string;
}

export default function Welcome({ children, city }: WelcomeProps) {
    const isMobile = useMobile()
    return (
        <div className="flex flex-col items-center justify-center w-full select-none">
            <h1 className="text-lg font-bold text-center flex items-center gap-2 subtext-1 surface-0 p-3 rounded-lg max-md:text-sm max-md:p-2 max-md:py-2">
                <WeatherWidget city={city}></WeatherWidget>
                {!isMobile ? <span className="">&nbsp; Welcome</span> : null}
                <span className="dark:text-blue-mocha-0 text-blue-latte-0 max-md:text-sm">{children}</span>
            </h1>
        </div>
    );
};
