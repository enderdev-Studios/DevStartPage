import { useState } from "react";
import DuckSvg from "../../assets/iconsEngines/DuckDuckgo";
import EcosiaSVG from "../../assets/iconsEngines/Ecosia";

export default function DropDown({ setSearchEngine, SearchEngine }: { setSearchEngine: any, SearchEngine: any }) {
    const [state, setState] = useState(true);
    const DropdownClass = state ? "hidden" : "block";
    
    return (
        <div className="relative">
            <div className="flex items-center dark:bg-[#11111b] bg-[#dce0e8] dark:text-[#cdd6f4] text-[#4c4f69] px-3 py-3 max-md:py-0 rounded-l-lg cursor-pointer dark:hover:outline-gray-300 hover:outline-gray-600 hover:outline-1" onClick={() => setState(!state)}>
                <span className="mr-2">Engine: <span className="font-bold">{SearchEngine}</span></span>
                <ul className={`absolute top-full left-0 mt-1 dark:bg-[#11111b] dark:text-[#cdd6f4] text-[#4c4f69] bg-[#dce0e8] rounded-lg p-2 w-full ${DropdownClass} z-50 shadow-lg`}>
                    <li><button className="w-full text-left p-1 rounded flex items-center gap-2" onClick={() => setSearchEngine("Google")}><i className='bx bxl-google' ></i>&nbsp; Google</button></li>
                    <li><button className="w-full text-left p-1 rounded flex items-center gap-2" onClick={() => setSearchEngine("Bing")}><i className='bx bxl-bing' ></i>&nbsp; Bing</button></li>
                    <li><button className="w-full text-left p-1 rounded flex items-center gap-2" onClick={() => setSearchEngine("Duckduckgo")}><DuckSvg />DuckDuckGo</button></li>
                    <li><button className="w-full text-left p-1 rounded flex items-center gap-2" onClick={() => setSearchEngine("Yahoo")}><i className='bx bxl-yahoo' ></i>&nbsp; Yahoo</button></li>
                    <li><button className="w-full text-left p-1 rounded flex items-center gap-2" onClick={() => setSearchEngine("Ecosia")}><EcosiaSVG />&nbsp; Ecosia</button></li>
                </ul>
            </div>
        </div>
    );
};
