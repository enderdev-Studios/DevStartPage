
import { useState } from "react";
import { LocalStorageKeys } from "../constants/constants";

// useStates 

export function useUser() {
    const [user, SetUsername] = useState(() => {
    const storedUsername = localStorage.getItem("username");
    return storedUsername ? storedUsername : "user";
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

    return { Submit: onSubmit, state: user}
}
export function useWeather() {
    const [location, setLocation] = useState(() => {
    const storedLocation = localStorage.getItem(LocalStorageKeys.Weather);
    return storedLocation ? storedLocation : "Madrid";
  });
    
   const onSubmit = (location: string) => {
    setLocation(location);
    localStorage.setItem(LocalStorageKeys.Weather, location);
  };

    return { Submit: onSubmit, state: location}
}
export function useImage() {
      const [image, setImage] = useState(() => {
        const storedImage = localStorage.getItem(LocalStorageKeys.Image);
        return storedImage ? storedImage : "";
        });
    const onSubmit = (e: any) => {
        e.preventDefault();
        const { imageUrl } = e.target as HTMLFormElement & { imageUrl?: HTMLInputElement }
        if (!imageUrl || !imageUrl.value) {
          return;
        }
        setImage(imageUrl.value);
        window.localStorage.setItem(LocalStorageKeys.Image, imageUrl.value);
        return (e.target as HTMLFormElement).reset()
    }
    return { Submit: onSubmit, state: image}
}
