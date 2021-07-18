import React, { useState, useEffect } from "react";
import "./styles/Quotes.css";
import { quotes } from "./QuoteList";
import { IQuote } from "./Interfaces";

export const Quotes: React.FC = () => {
  const [quote, setQuote] = useState<IQuote>({ quote: "", author: "" });
  const randomNum = Math.floor(Math.random() * quotes.length);
  useEffect(() => {
    setQuote({
      quote: quotes[randomNum].quote,
      author: quotes[randomNum].author,
    });
  }, []);
  return (
    <div className="Quotes">
      {quote.quote} - {quote.author}
    </div>
  );
};
