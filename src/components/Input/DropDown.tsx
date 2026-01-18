import { useState } from "react";
import DuckSvg from "../../assets/iconsEngines/DuckDuckgo";
import EcosiaSVG from "../../assets/iconsEngines/Ecosia";
import { useMobile } from "../../Hooks/useMobile";

export default function DropDown({ setSearchEngine, SearchEngine }: { setSearchEngine: any, SearchEngine: any }) {
    const [state, setState] = useState(true);
    const DropdownClass = state ? "hidden" : "block";
    const isMobile = useMobile()
    return (
        <div className="relative">
            <div className="surface-0 text dropdownEngines" onClick={() => setState(!state)}>
                <span className="mr-2 max-md:text-xs max-md:my-1 max-md:mr-0.5 max-md:h-10">Engine: <span className="font-bold dark:text-blue-mocha-0 text-blue-latte-0">{SearchEngine}</span></span>
                <ul className={`dropmenu ${DropdownClass}`}>
                    <li><button className="engine max-md:text-sm" onClick={() => setSearchEngine("Google")}>{!isMobile ? <i className='bx bxl-google' >&nbsp;</i> : null}Google</button></li>
                    <li><button className="engine max-md:text-sm" onClick={() => setSearchEngine("Bing")}>{!isMobile ? <i className='bx bxl-bing' >&nbsp;</i> : null}Bing</button></li>
                    <li><button className="engine max-md:text-sm" onClick={() => setSearchEngine("DuckDuckGo")}>{!isMobile ? <span><DuckSvg></DuckSvg></span> : null}DuckDuckGo</button></li>
                    <li><button className="engine max-md:text-sm" onClick={() => setSearchEngine("Yahoo")}>{!isMobile ? <i className='bx bxl-yahoo' >&nbsp;</i> : null} Yahoo</button></li>
                    <li><button className="engine max-md:text-sm" onClick={() => setSearchEngine("Ecosia")}>{!isMobile ? <span><EcosiaSVG></EcosiaSVG></span> : null}&nbsp;Ecosia</button></li>
                </ul>
            </div>
        </div>
    );
};
