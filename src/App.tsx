import React, { useEffect } from "react";
import { useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo } from "./types";
import { TodoList } from "./TodoList";
import { Clock } from "./Clock";
import { Greeting } from "./Greeting";

const App: React.FC = () => {
  // useEffect(() => {
  //   //Component did mount
  //   setInterval(tick, 1000);
  //   //Component did unmount
  //   return () => {
  //     clearInterval(tick);
  //   };
  // }, []);

  // const tick = () => {
  //   return setTime(new Date());
  // };

  return (
    <div className="App">
      <div className="Clock">
        <Clock />
      </div>
      <div className="Greeting">
        <Greeting />
      </div>
      {/* Greeting */}
      {/* Todo */}
      {/* Weather */}
      {/* Quotes */}
    </div>
  );
};

export default App;
