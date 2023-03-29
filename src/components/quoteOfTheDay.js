import React, { useState, useEffect } from 'react';

const quoteOfTheDay = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    };

    fetchQuote();
  }, []);

  return (
    <div>{quote}</div>

  );
};

export default quoteOfTheDay;
