import WeatherWidget from "./Weather";

interface WelcomeProps {
  children: React.ReactNode;
  city: string;
}

export default function Welcome({ children, city }: WelcomeProps) {
    
    return (
        <div className="flex flex-col items-center justify-center w-full h-3 select-none max-md:h-2 max-md:mt-4">
            <h1 className="text-lg font-bold text-center flex items-center gap-2 dark:bg-[#11111b]/50 dark:text-[#cdd6f4] text-[#4c4f69] bg-[#dce0e8]  p-3 rounded-lg"> 
                <WeatherWidget city={city}></WeatherWidget>
                &nbsp;
                Welcome {children}
            </h1>
        </div>
    );
};
