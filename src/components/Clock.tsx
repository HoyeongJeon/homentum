import React, { useState, useEffect } from "react";
import "./styles/Clock.css";
import { IClock } from "./Interfaces";

export const Clock: React.FC = () => {
  const date = new Date();
  // const [calender, setCalende] = useState({
  //   year: date.getFullYear(),
  //   month: date.getMonth(),
  //   day: date.getDay(),
  // });
  const [clock, setClock] = useState<IClock>({
    hour: date.getHours(),
    minute: date.getMinutes(),
    seconds: date.getSeconds(),
  });
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock({
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return clearInterval();
  }, []);
  return (
    <>
      {/* <span>
        {calender.year}.{calender.month}.{calender.day}
      </span> */}
      <h1>
        {clock.hour < 10 ? `0` + clock.hour : clock.hour}:
        {clock.minute < 10 ? `0` + clock.minute : clock.minute}:
        {clock.seconds < 10 ? `0` + clock.seconds : clock.seconds}
      </h1>
    </>
  );
};
