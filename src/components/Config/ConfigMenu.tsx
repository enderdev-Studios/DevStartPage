import { useState } from "react";
import WeatherConfig from "./Sections/WeatherConfig";
import UserConfig from "./Sections/userConfig";
import ConfigButton from "./ButtonConfig";
import Section from "./Sections/Section";

interface ConfigProps {
  Submit: (e: any) => void;
  onWeatherSubmit: (location: string) => void;
}

export default function Config({ Submit, onWeatherSubmit }: ConfigProps) {
  // Theme state
  const [state, setState] = useState(true);
  const DropdownClass = state ? "hidden" : "block";
  return (
    <div className="relative left-0.5 top-0 w-60 rounded-2xl m-4 select-none max-md:hidden">
      <div
        className="flex items-center dark:bg-[#181825] dark:text-[#cdd6f4] text-[#4c4f69] bg-[#e6e9ef]  px-3 py-3 rounded-lg cursor-pointer dark:hover:outline-gray-300 hover:outline-gray-800 hover:outline-1"
        onClick={() => setState(!state)}
      >
        <span className="text-lg font-bold">
          <i className="bx bxs-cog"></i>&nbsp;Configuration
        </span>
        <ul className={`dark:bg-[#11111b] dark:text-[#cdd6f4] text-[#4c4f69] h-84 overflow-y-auto absolute top-full right-0 mt-1 rounded-lg p-2 w-96 ${DropdownClass} z-50 shadow-lg`} >
          <Section title="Weather Config">
            <WeatherConfig onWeatherSubmit={onWeatherSubmit} />
          </Section>
          <Section title="username">
            <UserConfig onSubmit={Submit} />
          </Section>
          <Section title="Cache Data">
            <div className="m-2">
              <ConfigButton props={{ onClick: () => { window.localStorage.clear() } }}> Reset All</ConfigButton>

            </div>
          </Section>
        </ul>
      </div>
    </div>
  );
}
