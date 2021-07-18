import React from "react";
import { useEffect, useState } from "react";

interface ICoords {
  lat: number;
  lon: number;
}

interface IWeather {
  name: string;
  temp: number;
}
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={64779c24be2bccf0ecbb74005b638849} => Open Weather Api
export const Weather: React.FC = () => {
  const API_KEY = "64779c24be2bccf0ecbb74005b638849";
  const COORDS_KEY = "coords";
  const COORDS_LS = localStorage.getItem(COORDS_KEY) as string;
  const [coords, setCoords] = useState<Array<ICoords>>(
    COORDS_LS ? JSON.parse(COORDS_LS) : []
  );
  const [weather, setWeather] = useState<IWeather>({ name: "", temp: 0 });
  const currentCoords = JSON.parse(COORDS_LS);

  // 날씨 받아오기.
  async function getWeather() {
    if (COORDS_LS === "[]") {
      return;
    } else {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${currentCoords[0].lat}&lon=${currentCoords[0].lon}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          // result.name;
          setWeather({
            name: result.name,
            temp: result.main.temp,
          });
        })
        .catch(() => {
          console.log("error");
        });
    }
  }

  // 처음 렌더링 시 , 로컬스토리지에 lat, lon이 저장되어 있다면, 날씨를 받아오게 하기 위함.
  useEffect(() => {
    if (COORDS_LS !== null) getWeather();
  }, []);

  // 처음 렌더링 될 때 위치정보를 받아오기 위함.
  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const coordsBox = { lat: lat, lon: lon };
      setCoords([...coords, coordsBox]);
      localStorage.setItem(COORDS_KEY, JSON.stringify(coords));
      // currentCoords.filter(weather: any => weather[0])
    });
  }, [coords]);
  return (
    <div className="Weather">
      You are in {weather.name}, It's {weather.temp} C
    </div>
  );
};
