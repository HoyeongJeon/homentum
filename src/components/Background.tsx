import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Background.css";

export const Background: React.FC = () => {
  return (
    <img className="Bg-img" src="https://source.unsplash.com/random/1600x900" />
  );
};
