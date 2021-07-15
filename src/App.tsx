import React from "react";
import { Clock } from "./Clock";
import { TodoListItem } from "./TodoListItem";
import { Todo } from "./types";

const todos: Array<Todo> = [
  { text: "study react and typescript", complete: true },
  { text: "sleep", complete: false },
];
const App: React.FC = () => {
  return (
    <div className="App">
      {/* <div className="Clock">
        <Clock />
      </div> */}
      {/* Greeting */}
      <>
        <TodoListItem todo={todos[0]} />
        <TodoListItem todo={todos[1]} />
      </>
      {/* Weather */}
      {/* Quotes */}
    </div>
  );
};

export default App;
