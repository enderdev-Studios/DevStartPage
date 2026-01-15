import { useState } from "react";
import WeatherConfig from "./Sections/WeatherConfig";
import UserConfig from "./Sections/userConfig";
import ConfigButton from "./ButtonConfig";
import Section from "./Sections/Section";
import { useMobile } from "../../Hooks/useMobile";

interface ConfigProps {
  Submit: (e: any) => void;
  onWeatherSubmit: (location: string) => void;
}

export default function Config({ Submit, onWeatherSubmit }: ConfigProps) {
  // Theme state
  const [state, setState] = useState(true);
  const DropdownClass = state ? "hidden" : "block";
  const isMobile = useMobile()
  return (
    <div className="relative left-0.5 top-0 w-60 rounded-2xl select-none max-md:w-10 max-md:my-2 max-md:mt-3">
      <div
        className="subtext-1 surface-0 max-md:w-10 max-md:h-10 max-md:text-base max-md:font-bold max-md:px-2 max-md:py-2 text-center flex justify-center items-center px-3 py-3 rounded-lg cursor-pointer dark:hover:bg-overlay-mocha-0 hover:bg-overlay-latte-0"
        onClick={() => setState(!state)}
      >
        <span className="text-lg font-bold">
          <i className="bx bxs-cog max-md:text-sm max-md:font-bold"></i>{!isMobile ? <span>&nbsp;Configuration</span> : null}
        </span>
        <ul className={`background-crust text h-84 overflow-y-auto absolute top-full right-0 mt-1 rounded-lg p-2 w-96 ${DropdownClass} z-50 shadow-lg max-md:w-80`} >
          <Section title="Weather Config">
            <WeatherConfig onWeatherSubmit={onWeatherSubmit} />
          </Section>
          <Section title="Username">
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
