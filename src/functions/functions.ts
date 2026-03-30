import { fetchWeatherApi } from "openmeteo";

export const fetchWeather = async (city: string) => {
    
    const cordinates = await getCoordinates(city)
    
    let latitudeCity = cordinates?.latitude ?? 40.4165; // Madrid Code if not found
    let longitudeCity = cordinates?.longitude ?? -3.7026 // Madrid Code if not found


    const params = {
        "latitude": latitudeCity,
        "longitude": longitudeCity,
        "current": ["weather_code", "temperature_2m", "is_day", "apparent_temperature"],
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const latitude = response.latitude();
    const longitude = response.longitude();
    const elevation = response.elevation();
    const utcOffsetSeconds = response.utcOffsetSeconds();

    console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
    );

    const current = response.current()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
           
            weather_code: current.variables(0)!.value(),
            temperature_2m: Math.round(current.variables(1)!.value()),
            is_day: current.variables(2)!.value(),
            apparent_temperature: Math.round(current.variables(8)!.value()),
        },
    };

    return Promise.resolve(weatherData);
};


export async function getCoordinates(city: string): Promise<{ latitude: number; longitude: number } | null> {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );
    if (!response.ok) throw new Error("Error al llamar al servicio de geocoding");

    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const { latitude, longitude } = data.results[0];
      return { latitude, longitude };
    }
    return null;
  } catch (error) {
    console.error("Error obteniendo coordenadas:", error);
    return null;
  }
}

// URL check

export function UrlCheck(query: string): boolean {
  try {
    new URL(query);
    return true;
  } catch (error) {
    return false;
  }
}