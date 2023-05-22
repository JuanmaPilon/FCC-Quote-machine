import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [quote, setQuote] = useState('');
  const [autor, setAutor] = useState('');
  const key = 'WI3ryzXN6yRbAijcEcD5r7DfTiRhKRmKE5KLysxP';
  
  const getRandomQuote = async () => {
    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/quotes?category=hope", {
        headers: {
          'X-Api-Key': key
        },
      });
      const data = response.data[0];
      setQuote(data.quote);
      setAutor(data.author);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewQuote = () => {
    getRandomQuote();
  };

  const tweetQuote = () => {
    // Implementa lógica para compartir la cita en Twitter
  };

  return (
    <div className="App">
      <div id='box'>
        <h1>Random Quote Machine!</h1>
        <div id='quote'>
          <p>{quote}</p>
        </div>
        <div id='autor'>
          <h3>{autor}</h3>
        </div>
        <button id='new-quote' onClick={handleNewQuote}>
          New Quote!
        </button>
        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} - ${autor}`} target="_blank" rel="noopener noreferrer">
          Share on Twitter!
        </a>
      </div>
    </div>
  );
}

export default App;
