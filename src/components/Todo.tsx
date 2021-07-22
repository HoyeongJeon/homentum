import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./styles/Todo.css";

export const Todo: React.FC = () => {
  const TODOS_KEY = "todos";
  const TODOS_LS = localStorage.getItem(TODOS_KEY);
  const [input, setInput] = useState<string>("");
  // 새로고침 시 local storage 사라지게 하지 않기.
  const [todoList, setTodoList] = useState<Array<string>>(
    TODOS_LS ? JSON.parse(TODOS_LS) : []
  );

  console.log("rerender!");

  const deleteBtn = useCallback(
    (id: number) => {
      const updatedTodos = todoList.filter((elem, ind) => {
        return ind !== id;
      });
      console.log("I'm rerender~!");
      setTodoList(updatedTodos);
    },
    [todoList]
  );

  // TodoList에 아이템 넣기
  const addItem = useMemo(
    () => (e: any) => {
      e.preventDefault();
      if (!input) {
        return;
      } else {
        setTodoList([...todoList, input]);
        setInput("");
      }
    },
    [input, todoList]
  );
  // TodoList 전체 삭제
  const removeAll = useCallback(() => {
    setTodoList([]);
  }, []);

  // Local Storage에 todo 넣기
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="Todo__form">
        <form>
          <input
            type="text"
            placeholder="What will you do today?"
            onChange={useCallback((e) => setInput(e.target.value), [])}
            value={input}
          />
          <button onClick={addItem}>🍎</button>
        </form>
      </div>
      <div className="showTodo">
        {todoList.map((elem, index) => {
          return (
            <div className="eachTodo" key={index}>
              <h3>
                <button onClick={() => deleteBtn(index)}>❌</button>
                {elem}
              </h3>
            </div>
          );
        })}
      </div>
      <div className="eachTodo__removeAll">
        <button onClick={removeAll}>Well done 💖</button>
      </div>
    </>
  );
};
