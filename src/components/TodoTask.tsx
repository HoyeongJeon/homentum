import React from "react";
import { ITodo } from "../interface/interface";

interface Props {
  todo: ITodo;
  deleteTodo(todoToDelete: string): void;
}

export const TodoTask = ({ todo, deleteTodo }: Props) => {
  return (
    <div className="todo">
      <div className="todoName">
        <button
          className="complete"
          onClick={() => {
            deleteTodo(todo.todo);
          }}
        >
          ❌
        </button>
        <span>{todo.todo}</span>
      </div>
    </div>
  );
};
