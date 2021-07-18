import React, { useState } from "react";
import "./styles/Clock.css";

export const Clock: React.FC = () => {
  let time: string = new Date().toLocaleTimeString();
  const [dclock, setDclock] = useState<string>(time);
  const updateClock = () => {
    time = new Date().toLocaleTimeString();
    setDclock(time);
  };
  setInterval(updateClock, 1000);
  return <h1>{dclock}</h1>;
};
