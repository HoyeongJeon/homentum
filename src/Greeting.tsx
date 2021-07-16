import React, { ChangeEvent } from "react";
import { useRef } from "react";
import { useState } from "react";

export const Greeting: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [user, setUser] = useState("Good day !");
  const onUserChange = (e: any) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const onUserSubmit = (e: any) => {
    e.preventDefault();
    setUser(`Good day! ${userInput}`);
    setUserInput("");
  };

  return (
    <>
      <h1>{user}</h1>
      <form onSubmit={onUserSubmit}>
        <input
          type="text"
          placeholder="What is your name?"
          value={userInput}
          onChange={onUserChange}
        />
      </form>
    </>
  );
};
