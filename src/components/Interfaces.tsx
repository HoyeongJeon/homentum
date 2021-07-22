export interface IQuote {
  quote: string;
  author: string;
}
export interface ICoords {
  lat: number;
  lon: number;
}

export interface IWeather {
  name: string;
  temp: number;
  icon: string;
}

export interface IClock {
  hour: number;
  minute: number;
  seconds: number;
}
