import CorpCard from '../components/CorpCard';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://stockradars.co/assignment/data.php')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
  
  return (
    <>
    <div className="container mx-auto mt-4">
          <CorpCard data={data} />
        </div>
    </>
  )
}

export default HomePage