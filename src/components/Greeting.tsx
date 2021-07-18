import React, { useState, useCallback } from "react";
import "./styles/Greeting.css";

export const Greeting: React.FC = () => {
  const USER_KEY = "User";
  const USER_LS = localStorage.getItem(USER_KEY);
  const [userInput, setUserInput] = useState<string>("");

  const onUserChange = useCallback((e: any) => {
    e.preventDefault();
    const name: string = e.target.value;
    setUserInput(name);
  }, []);

  const onUserSubmit = useCallback(() => {
    localStorage.setItem(USER_KEY, userInput);
  }, [userInput]);
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
      <div className="greetingUser">{getUser()}</div>
    </>
  );
};
