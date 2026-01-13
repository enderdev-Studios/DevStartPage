import { useEffect, useState } from 'react';
import { fetchWeather } from '../../constants/functions';
import WeatherImage from './WeatherImage';

export default function WeatherWidget({ city }: { city: string }) {
    const [weatherData, setWeatherData] = useState<any>(null);

    useEffect(() => {
        fetchWeather(city).then(a => {
            setWeatherData(a);
        }).catch(error => {
            setWeatherData(null);
            console.error("Error fetching weather data:", error);
        });
    }, [city]);

    const temperature = weatherData?.current?.temperature_2m ?? 'N/A';

    return (
        <span className="flex items-center gap-2 max-md:hidden">
            <WeatherImage WeatherData={weatherData} />
            <span className='font-extrabold'>{temperature} °C</span>
        </span>
    );
}
