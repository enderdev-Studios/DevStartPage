// Assets
import ClearDay from "../assets/weather/clear-day.svg";
import ClearNight from "../assets/weather/clear-night.svg";
import FogDay from "../assets/weather/fog-day.svg";
import FogNight from "../assets/weather/fog-night.svg";
import PartlyCloudyDay from "../assets/weather/partly-cloudy-day.svg";
import PartlyCloudyNight from "../assets/weather/partly-cloudy-night.svg";
import OvercastDay from "../assets/weather/overcast-day.svg";
import OvercastNight from "../assets/weather/overcast-night.svg";
import RainDay from "../assets/weather/partly-cloudy-day-rain.svg";
import RainNight from "../assets/weather/partly-cloudy-night-rain.svg";
import SnowDay from "../assets/weather/partly-cloudy-day-snow.svg";
import SnowNight from "../assets/weather/partly-cloudy-night-snow.svg";
import ThunderDay from "../assets/weather/thunderstorms-day.svg";
import ThunderNight from "../assets/weather/thunderstorms-night.svg";

// Constants

export const SearchEngines = {
    google: "https://www.google.com/search?q=",
    bing: "https://www.bing.com/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    yahoo: "https://search.yahoo.com/search?p=",
    ecosia: "https://www.ecosia.org/search?q=",
};

export const UrlDomain = `https://www.google.com/s2/favicons?sz=64&domain=`

export const DefaultDocs = [
    {
        name: "Seyfert",
        url: "https://seyfert.dev",
    },
    {
        name: "React",
        url: "https://es.react.dev/blog/2023/03/16/introducing-react-dev",
    },
    {
        name: "Next.js",
        url: "https://nextjs.org/docs",
    },
    {
        name: "Javascript",
        url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
        name: "Typescript",
        url: "https://www.typescriptlang.org/docs/",
    },
    {
        name: "Astro",
        url: "https://docs.astro.build/en/getting-started/",
    },
];

export const LocalStorageKeys = {
    Docs: "Docs",
    Weather: "Weather",
    ShortCuts: "ShortCuts",
    username: "username",
    Image: "image",
    Theme: "theme"
};


// weather codes to Text 

export const WeatherCodes = {
    "0": { text: "Clear sky", icon: [ClearNight, ClearNight] },
    "1": { text: "Mainly clear", icon: [ClearNight, ClearDay] },
    "2": { text: "Partly cloudy", icon: [PartlyCloudyNight, PartlyCloudyDay] },
    "3": { text: "Overcast", icon: [OvercastNight, OvercastDay] },
    "45": { text: "Fog", icon: [FogNight, FogDay] },
    "48": { text: "Depositing rime fog", icon: [FogNight, FogDay] },
    "51": { text: "Drizzle light", icon: [RainNight, RainDay] },
    "53": { text: "Drizzle moderate", icon: [RainNight, RainDay] },
    "55": { text: "Drizzle dense intensity", icon: [RainNight, RainDay] },
    "56": { text: "Freezing drizzle light", icon: [RainNight, RainDay] },
    "57": { text: "Freezing drizzle dense intensity", icon: [RainNight, RainDay] },
    "61": { text: "Rain slight", icon: [RainNight, RainDay] },
    "63": { text: "Rain moderate", icon: [RainNight, RainDay] },
    "65": { text: "Rain heavy intensity", icon: [RainNight, RainDay] },
    "66": { text: "Freezing rain light", icon: [RainNight, RainDay] },
    "67": { text: "Freezing rain heavy intensity", icon: [RainNight, RainDay] },
    "71": { text: "Snow fall slight", icon: [SnowNight, SnowDay] },
    "73": { text: "Snow fall moderate", icon: [SnowNight, SnowDay] },
    "75": { text: "Snow fall heavy intensity", icon: [SnowNight, SnowDay] },
    "77": { text: "Snow grains", icon: [SnowNight, SnowDay] },
    "80": { text: "Rain showers slight", icon: [RainNight, RainDay] },
    "81": { text: "Rain showers moderate", icon: [RainNight, RainDay] },
    "82": { text: "Rain showers violent", icon: [RainNight, RainDay] },
    "85": { text: "Snow showers slight", icon: [SnowNight, SnowDay] },
    "86": { text: "Snow showers heavy", icon: [SnowNight, SnowDay] },
    "95": { text: "Thunderstorm slight or moderate", icon: [ThunderNight, ThunderDay] },
    "96": { text: "Thunderstorm with slight hail", icon: [ThunderNight, ThunderDay] },
    "99": { text: "Thunderstorm with heavy hail", icon: [ThunderNight, ThunderDay] }
};