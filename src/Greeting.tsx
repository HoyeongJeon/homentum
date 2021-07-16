import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";

export const Greeting: React.FC = () => {
  const USER_KEY = "User";
  const USER_LS = localStorage.getItem(USER_KEY);
  const [userInput, setUserInput] = useState<string>("");

  const onUserChange = (e: any) => {
    e.preventDefault();
    const name: string = e.target.value;
    setUserInput(name);
  };

  const onUserSubmit = () => {
    localStorage.setItem(USER_KEY, userInput);
  };
  const getUser = () => {
    const userInit = localStorage.getItem(USER_KEY);
    if (userInit === null) {
      return (
        <>
          <h1>Welcome!</h1>
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
    }
    return (
      <>
        <h1>Good Day!</h1>
        <h2>{USER_LS}</h2>
      </>
    );
  };

  return (
    <>
      <div>{getUser()}</div>
    </>
  );
};
