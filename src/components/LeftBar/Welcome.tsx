import WeatherWidget from "./Weather";

interface WelcomeProps {
  children: React.ReactNode;
  city: string;
}

export default function Welcome({ children, city }: WelcomeProps) {
    
    return (
        <div className="flex flex-col items-center justify-center w-full h-3 select-none max-md:h-2 max-md:mt-4">
            <h1 className="text-lg font-bold text-center flex items-center gap-2 subtext-1 surface-0  p-3 rounded-lg"> 
                <WeatherWidget city={city}></WeatherWidget>
                &nbsp;
                Welcome <span className="dark:text-blue-mocha-0 text-blue-latte-0">{children}</span>
            </h1>
        </div>
    );
};
