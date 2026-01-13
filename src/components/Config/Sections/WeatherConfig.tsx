import React, { useState } from "react";
import ConfigButton from "../ButtonConfig";

interface WeatherConfigProps {
  onWeatherSubmit: (location: string) => void;
}

export default function WeatherConfig({ onWeatherSubmit }: WeatherConfigProps) {
  const [location, setLocation] = useState("");

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const handleGetLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await res.json();
        const city = data.address.city || data.address.town || data.address.village || "";
        const country = data.address.country || "";
        const fullLocation = `${city}, ${country}`;
        setLocation(fullLocation);
      });
    } else {
      alert("Geolocation no soportada en este navegador.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim()) {
      onWeatherSubmit(location);
      setLocation("");
    }
  };

  return (
    <li className="w-full text-left p-1 rounded mt-1">
      <form className="flex flex-col m-3" onSubmit={handleSubmit}>
        <label className="text-lg">Find Location</label>
        <input type="text" name="city" placeholder="Paris, Madrid, Buenos Aires" className="mb-2 p-2 rounded focus:border-b-2 focus:border-[#7c7f93] outline-0" required value={location}
          onChange={(e) => setLocation(e.target.value)}
          onClick={handleInputClick}
          autoComplete="off"
        />
        <ConfigButton props={{ onClick: handleGetLocation, itemType: "button" }}>
          Get From Device Location
        </ConfigButton>
        <ConfigButton props={{ onClick: handleGetLocation, itemType: "submit" }}>
          Submit
        </ConfigButton>
      </form>
    </li>
  );
}

