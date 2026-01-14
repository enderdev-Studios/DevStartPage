import day from "../../assets/weather/clear-day.svg";
import night from "../../assets/weather/clear-night.svg";
import { WeatherCodes } from "../../constants/constants";
import { useMobile } from "../../Hooks/useMobile";

export default function WeatherImage({ WeatherData }: { WeatherData: any }) {
    const isDay = WeatherData?.current?.is_day ?? 0;
    const weatherCode = WeatherData?.current?.weather_code as number || 0;

    // @ts-ignore
    const Weather = WeatherCodes[weatherCode] || { text: "Unknown", icon: [day, night] };
    
    // Usar isDay como índice (0 para noche, 1 para día)
    const Img = Weather.icon[isDay];
    const isMobile = useMobile()
    const size = isMobile ? 24 : 32
    return (
        <img
            src={Img}
            alt={Weather.text}
            height={size}
            width={size}
            title={Weather.text}
        />
    );
};
