import { useState } from "react";
import { SearchEngines } from "../../constants/constants";
import { UrlCheck } from "../../constants/functions";
import DropDown from "./DropDown";

export default function Input() {
  const [SearchEngine, setSearchEngine] = useState("Google");
 

  const OnkeyDown = (e: any) => {
    if (e.key !== 'Enter') return;
    let target = (e.target as HTMLInputElement).value
    const engine = Object.values(SearchEngines).find(
      (engine) => engine.includes(SearchEngine.toLowerCase())
    ) || SearchEngines.google; // Default to Google if no match found
    const location = UrlCheck(target) ? String(target) : `${engine + encodeURIComponent(target)}`
    window.location.href = location;
    return target = ""; // Clear input after search
  }
  

  return (
    <div className="flex flex-col items-center justify-center w-full h-full select-none mr-4 ">
      <div className="flex items-center w-full max-w-2xl">
        
        <DropDown setSearchEngine={setSearchEngine} SearchEngine={SearchEngine}/>
        <input
          type="text"
          className="flex-1 focus:outline-0  p-2 py-3 rounded-r-3xl dark:bg-[#11111b] bg-[#dce0e8] h-12 dark:text-[#cdd6f4] text-[#4c4f69]"
          placeholder="🔎   Search or type a URL"
          onKeyDown={OnkeyDown}
        />
      </div>
    </div>
  )
}
