import logo from './logo.svg';
import './App.css';
import CorpCard from './components/CorpCard';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://stockradars.co/assignment/data.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">

          <CorpCard data={data} />
        </div>
      </header>
    </div>
  );
}

