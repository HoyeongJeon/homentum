import React from "react";
import { useEffect, useState } from "react";

interface Coords {
  lat: number;
  lon: number;
}
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={64779c24be2bccf0ecbb74005b638849} => Open Weather Api
export const Weather: React.FC = () => {
  const API_KEY = "64779c24be2bccf0ecbb74005b638849";
  const COORDS_KEY = "coords";
  const COORDS_LS = localStorage.getItem(COORDS_KEY);
  const [coords, setCoords] = useState<Array<Coords>>(
    COORDS_LS ? JSON.parse(COORDS_LS) : []
  );

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const coordsBox = { lat: lat, lon: lon };
      setCoords([...coords, coordsBox]);
      localStorage.setItem(COORDS_KEY, JSON.stringify(coords));
    });
  }, [coords]);
  return <div>Weather</div>;
};
