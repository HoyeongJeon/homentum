import React, { ChangeEvent } from "react";
import { useState } from "react";
import { ITodo } from "../interface/interface";
import { TodoTask } from "./TodoTask";

export const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "todo") {
      setTodo(e.target.value);
    }
  };
  const addTodo = (): void => {
    const newTodo = { todo: todo };
    setTodoList([...todoList, newTodo]);
    setTodo("");
    console.log(todoList);
  };

  const deleteTodo = (todoToDelete: string): void => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.todo !== todoToDelete;
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} name="todo" onChange={handleChange} />
        <button onClick={addTodo} name="btn">
          Add!
        </button>
      </form>
      <div className="TodoList">
        {todoList.map((todo: ITodo, key: number) => {
          return <TodoTask key={key} todo={todo} deleteTodo={deleteTodo} />;
        })}
      </div>
    </div>
  );
};
