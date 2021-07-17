import React, { useState, useEffect, useMemo, useCallback } from "react";

export const Todo: React.FC = () => {
  const TODOS_KEY = "todos";
  const TODOS_LS = localStorage.getItem(TODOS_KEY);
  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const deleteBtn = (id: number) => {
    console.log("I'm playing!");
    const updatedTodos = todoList.filter((elem, ind) => {
      return ind !== id;
    });

    setTodoList(updatedTodos);
  };

  // TodoList에 아이템 넣기
  const addItem = (e: any) => {
    e.preventDefault();
    if (!input) {
      console.log("nothing");
    } else {
      setTodoList([...todoList, input]);
      console.log(todoList);
      setInput("");
    }
  };
  // TodoList 전체 삭제
  const removeAll = () => {
    setTodoList([]);
  };

  // Local Storage에 todo 넣기
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="What will you do today?"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={addItem}>🍎</button>
        </form>
      </div>
      <div className="showTodo">
        {todoList.map((elem, index) => {
          return (
            <div className="eachTodo" key={index}>
              <h3> {elem}</h3>
              <button onClick={() => deleteBtn(index)}>❌</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
