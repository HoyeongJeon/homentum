import React from "react";
import { Clock } from "./components/Clock";
import { Greeting } from "./components/Greeting";
import { Todo } from "./components/Todo";
import { Weather } from "./components/Weather";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Clock">
        <Clock />
      </div>
      <div className="Greeting">
        <Greeting />
      </div>
      <div className="Todo">
        <Todo />
      </div>
      <div>
        <Weather />
      </div>
      {/* Weather */}
      {/* Quotes */}
    </div>
  );
};

export default App;
