
import Config from "./components/Config/ConfigMenu"
import ShortCuts from "./components/Input/ShortCuts"
import Input from "./components/Input/Input"
import Docs from "./components/LeftBar/Docs"
import Welcome from "./components/LeftBar/Welcome"
import ChangeTheme from "./components/Input/ChangeTheme"
import { useImage, useUser, useWeather } from "./functions/Submits"
import { useEffect } from "react"
import { UrlCheck } from "./functions/functions"

function App() {

  // Change Photo
  const userConfig = useUser()
  const weatherConfig = useWeather()
  const imgConfig = useImage()

  useEffect(() => {
    const bodyElement = document.body;
    const image = UrlCheck(imgConfig.state) ? String(imgConfig.state) : "";
    bodyElement.style.backgroundImage = image ? `url("${image}")` : "none";
    bodyElement.style.backgroundPosition = image ? "center" : "";
    bodyElement.style.backgroundPositionY = image ? "top" : "";
    bodyElement.style.backgroundRepeat = image ? "no-repeat" : "";
    bodyElement.style.backgroundSize = image ? "cover" : "";
    if (image) {
      bodyElement.classList.remove("background-simple")
    } else {
      bodyElement.classList.add("background-simple")
    }
  }, [imgConfig.state])
  

  return (
    <>
      <div className="m-4 mb-12">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full w-fit ">
          <Docs></Docs>
          <Welcome city={weatherConfig.state}>{userConfig.state}</Welcome>
        </div>

        <div className="absolute top-4 right-4 flex items-center w-fit gap-2">
          <ChangeTheme />
          <Config Submit={userConfig.Submit} onWeatherSubmit={weatherConfig.Submit} onImageSubmit={imgConfig.Submit} />
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
