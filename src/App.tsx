import './App.css';
import { useParams } from 'react-router-dom';
import cert1Bg from './cert1-bg.jpg';

import data from './data';

interface Params {
  participant: string;
}

function App() {
  const params = useParams<Params>();
  const { participant } = params;

  const notFound = !data.participants.includes(participant);

  return (
    <div className="relative h-full w-xl">
      {notFound ? (
        <div className="text-center p-32">
          {participant} 참여자 찾을 수 없음 (관리자에게 문의해주세요)
        </div>
      ) : (
        <>
          <div className="top-0 absolute">
            <img src={cert1Bg} alt="do good hackers certs" />
          </div>
          <div
            className="absolute font-bold"
            style={{ left: '21vw', top: '35vw', fontSize: '3vw' }}
          >
            {participant}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
