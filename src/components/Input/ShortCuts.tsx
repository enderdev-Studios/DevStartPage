import { useState, type FormEvent } from "react"
import Shortcut from "./ShortCut";
import Modal from "./Modal";
import type { ShortCutType } from "../../types";
import { LocalStorageKeys } from "../../constants/constants";

export default function ShortCuts() {
  // States 
  const [modalState, setModalState] = useState(false);
  const [shortcuts, setShortcuts] = useState<ShortCutType[]>(() => {
    const storedShortcuts = window.localStorage.getItem(LocalStorageKeys.ShortCuts);

    return storedShortcuts ? JSON.parse(storedShortcuts) : [];
  });
  
  // Functions 

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, url } = e.target as HTMLFormElement
    if (!name || !url || !(name as any).value || !(url as any).value) {
      return;
    }
    if (shortcuts.length >= 8) {
      return;
    }
    const newShortcut: ShortCutType = {
      name: (name as any).value,
      url: (url as any).value
    };
    setShortcuts([...(shortcuts || []), newShortcut]);
    setModalState(!modalState);
    return (e.target as HTMLFormElement).reset()
  }

  // Save Shortcuts to localStorage

  if (shortcuts) {
    window.localStorage.setItem(LocalStorageKeys.ShortCuts, JSON.stringify(shortcuts));
  }

  const Onclick = () => {
    setModalState(!modalState);
  }

  const deleteShortcut = (index: number) => {
    const updatedShortcuts = shortcuts.filter((_, i) => i !== index);
    setShortcuts(updatedShortcuts);
    window.localStorage.setItem(LocalStorageKeys.ShortCuts, JSON.stringify(updatedShortcuts));
  }


  return (
    <div className="mt-6 flex flex-col items-center justify-center text-white max-md:hidden">
      <div className="mt-4 grid grid-cols-4 gap-4">
        {shortcuts.map((shortcut, index) => (
          <Shortcut url={shortcut.url} name={shortcut.name} key={index} Onclick={() => deleteShortcut(index)}></Shortcut>
        ))}
        <button onClick={Onclick} className={
          shortcuts.length >= 8 ? "hidden" : 
          "dark:hover:bg-gray-800 hover:bg-[#b0b3b8]  text-[#4c4f69] dark:text-[#cdd6f4] font-bold py-1 px-2 cursor-pointer dark:bg-[#181825] bg-[#dce0e8]/50 h-28 w-24 rounded-lg relative select-none"}>
          <span className="text-3xl">+</span>
          <br />
          Add Shortcut
        </button>
        
      </div>
        <Modal state={modalState} onSubmit={onSubmit} onClick={Onclick} /> {/* Todo bien :D*/}
    </div>
  )
}
