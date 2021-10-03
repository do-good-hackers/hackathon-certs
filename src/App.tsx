import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import cert1Bg from './cert1-bg.jpg';

interface Params {
  participant: string;
}

function App() {
  const params = useParams<Params>();
  const { participant } = params;

  return (
    <div className="relative h-full w-xl">
      <div className="top-0 absolute">
        <img src={cert1Bg} alt="do good hackers certs" />
      </div>
      <div
        className="absolute font-bold"
        style={{ left: '21vw', top: '35vw', fontSize: '3vw' }}
      >
        {participant}
      </div>
    </div>
  );
}

export default App;
