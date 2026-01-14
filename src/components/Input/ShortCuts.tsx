import { useState, type FormEvent } from "react"
import Shortcut from "./ShortCut";
import Modal from "./Modal";
import type { ShortCutType } from "../../types";
import { LocalStorageKeys } from "../../constants/constants";
import { useMobile } from "../../Hooks/useMobile";

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

  const isMobile = useMobile()


  return (
    <div className="mt-4 flex flex-col items-center justify-center max-md:left-6">
      <div className="mt-4 flex-wrap justify-center grid grid-cols-4 max-md:grid-cols-2 gap-4">
        {shortcuts.map((shortcut, index) => (
          <Shortcut url={shortcut.url} name={shortcut.name} key={index} Onclick={() => deleteShortcut(index)}></Shortcut>
        ))}

        <button onClick={Onclick} className={
          shortcuts.length >= (isMobile ? 4 : 8) ? "hidden" : 
          "subtext-1 surface-0 shortCutBtn"}>
          <span className="text-3xl max-md:text-base">+</span>
          <br />
          <span className="max-md:text-xs">Add Shortcut</span>
          
        </button>
        
      </div>
        <Modal state={modalState} onSubmit={onSubmit} onClick={Onclick} /> {/* Todo bien :D*/}
    </div>
  )
}
