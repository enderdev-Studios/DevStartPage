import Config from "./components/Config/ConfigMenu"
import ShortCuts from "./components/Input/ShortCuts"
import Input from "./components/Input/Input"
import Docs from "./components/LeftBar/Docs"
import Welcome from "./components/LeftBar/Welcome"
import { useState } from "react"
import { LocalStorageKeys } from "./constants/constants"
import ChangeTheme from "./components/Input/ChangeTheme"

function App() {
  const [user, SetUsername] = useState(() => {
    const storedUsername = localStorage.getItem("username");
    return storedUsername ? storedUsername : "user";
  });

  const [location, setLocation] = useState(() => {
    const storedLocation = localStorage.getItem(LocalStorageKeys.Weather);
    return storedLocation ? storedLocation : "Madrid";
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { username } = e.target as HTMLFormElement
    if (!username || !(username as any).value) {
      return;
    }
    SetUsername((username as any).value);
    window.localStorage.setItem(LocalStorageKeys.username, username.value);
    return (e.target as HTMLFormElement).reset()
  }

  const onWeatherSubmit = (location: string) => {
    setLocation(location);
    localStorage.setItem(LocalStorageKeys.Weather, location);
  };

  return (
    <>
      <div className="m-4 mb-12 ">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full w-fit ">
          <Docs></Docs>
          <Welcome city={location}>{user}</Welcome>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-2">
          <ChangeTheme />
          <Config Submit={onSubmit} onWeatherSubmit={onWeatherSubmit} />
        </div>
      </div>
      <div className="m-16 mt-20">
        <div className="mt-36 flex flex-col items-center justify-center">
          <Input />
        </div>
        <ShortCuts></ShortCuts>
      </div>
    </>
  )
}

export default App
