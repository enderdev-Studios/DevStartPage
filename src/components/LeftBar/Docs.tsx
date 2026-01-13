import { useState, } from "react";
import { DefaultDocs, LocalStorageKeys, } from "../../constants/constants";
import Links from "./Links";

export default function Docs({ }) {
  const [state, setState] = useState(true);
  const [docs, updateDocs] = useState(() => {
    const storedDocs = window.localStorage.getItem(LocalStorageKeys.Docs);
    return storedDocs ? JSON.parse(storedDocs) : DefaultDocs;
  });
  

  // functions
  
  const OnkeyDown = (e: any) => {
    if (e.key !== 'Enter') return;
    
    try {
        const url = new URL(e.target.value); // Validate URL
        fetch(url.href)
          .then(response => response.text())
          .then(html => {
            const match = html.match(/<title>(.*?)<\/title>/i);
            const title = match ? match[1] : url.hostname;
            updateDocs([...docs, { name: title, url: url.href }]);
          })
          .catch(() => {
            updateDocs([...docs, { name: url.hostname, url: url.href}]);
          });
      } catch {}
      return e.target.value = ""; // Clear input after adding

  }

  // Save Docs to localStorage
  if (docs) {
    window.localStorage.setItem(LocalStorageKeys.Docs, JSON.stringify(docs));
  }

  const DropdownClass = state ? "hidden" : "block";
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  // Delete a doc

  const deleteDoc = (e: any,index: number) => {
    e.stopPropagation();
    const UpdatedDocs = docs.filter((_: any, i: any) => i !== index);
    updateDocs(UpdatedDocs);
    window.localStorage.setItem(LocalStorageKeys.Docs, JSON.stringify(UpdatedDocs));
  }

  return (
    <div className="relative left-0.5 top-0 w-68 rounded-2xl m-4 select-none max-md:hidden">
      <div
        className="flex items-center dark:bg-[#11111b] dark:text-[#cdd6f4] text-[#4c4f69] bg-[#dce0e8] px-3 py-3 rounded-lg cursor-pointer "
        onClick={() => setState(!state)}
      >
        <span className="text-lg">
          <i className="bx bxs-book-open"></i>&nbsp;Docs
        </span>
        <ul
          className={`h-84 overflow-y-auto absolute top-full left-0 mt-1 dark:bg-[#11111b] dark:text-[#cdd6f4] text-[#4c4f69] bg-[#dce0e8] rounded-lg p-2  ${DropdownClass}`}
        >
          {docs.map((doc: any, index: any) => (
            <Links key={index} name={doc.name} url={doc.url} Onclick={(e: any) => deleteDoc(e, index)}/>
          ))}
          <li className="w-full text-left p-1 rounded mt-1">
            <input
              className="w-full text-left p-1 rounded hover:outline-gray-600 "
              placeholder="+ Add New Doc"
              onClick={handleInputClick}
              onKeyDown={OnkeyDown}
              autoComplete="off"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
