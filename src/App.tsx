import React from "react";
import { Clock } from "./components/Clock";
import { Greeting } from "./components/Greeting";
import { Todo } from "./components/Todo";
import { Weather } from "./components/Weather";
import { Quotes } from "./components/Quotes";
import { Background } from "./components/Background";
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
      <div>
        <Quotes />
      </div>
      <div className="Background">
        <Background />
      </div>
      {/* Quotes */}
      {/* Background */}
    </div>
  );
};

export default App;
