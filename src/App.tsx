import React, { useEffect } from "react";
import { useState } from "react";
import { TodoListItem } from "./components/TodoListItem";
import { TodoList } from "./components/TodoList";
import { Clock } from "./components/Clock";
import { Greeting } from "./components/Greeting";
import { Todo } from "./components/Todo";
import { TodoTask } from "./components/TodoTask";
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
      {/* Greeting */}
      {/* Todo */}
      {/* Weather */}
      {/* Quotes */}
    </div>
  );
};

export default App;
