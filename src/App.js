import { useState, useEffect } from "react";
import walter from "./assets/walter.png"

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/200")
      .then((res) => {
        console.log(res.ok, res.status)
        return res.json()})
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <main className="bg-gradient-to-br from-green-400 to-green-800 flex h-screen text-center justify-between items-center flex-col">
      <h1 className="mt-10 text-lg font-medium">Project: Breaking Bad Quote Generator</h1>
      <section className="flex h-96 border-blue-950 border-solid border-4 flex-col justify-between items-center w-1/2 mb-60 rounded-xl bg-green-200 shadow-sm">
        <button className="bg-green-900 w-max p-2 rounded-md text-gray-100 hover:scale-110 active:scale-95 mt-20 shadow-md" onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>“</span>
          {quote?.quote}
          <span>“</span>
        </h3>
        <i className="mb-20">- {quote?.author}</i>
      </section>
      <img src={walter} alt="Walter White" className="w-80 self-start absolute bottom-0"></img>
    </main>
  );
}