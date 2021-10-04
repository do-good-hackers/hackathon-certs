import { useRef } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import { exportComponentAsJPEG } from 'react-component-export-image';

import cert1Bg from './cert1-bg.jpg';

import data from './data';

export function useQueryParams<K, T>(keys: K[]): T {
  const params = new URLSearchParams(useLocation().search);

  return keys.reduce<T>((p, key: K) => {
    // @ts-ignore
    p[key] = params.get(key);
    return p;
  }, {} as T);
}

function App() {
  const params = useQueryParams<string, Record<string, string>>([
    'p',
  ]);
  const participant = params.p;

  const notFound = !data.participants.includes(participant);

  const componentRef = useRef(null);

  return (
    <div className="relative min-h-full w-xl">
      <button
        className="p-5 m-5 bg-blue-300 text-gray-800 font-extrabold rounded"
        onClick={() => exportComponentAsJPEG(componentRef)}
      >
        다운로드
      </button>

      <div className="relative w-xl border-2">
        {notFound ? (
          <div className="text-center p-32">
            {participant} 참여자 찾을 수 없음 (관리자에게
            문의해주세요)
          </div>
        ) : (
          <div className="">
            <div className="top-0 absolute border-gray-200">
              <div ref={componentRef}>
                <img src={cert1Bg} alt="do good hackers certs" />
                <div
                  className="absolute font-bold"
                  style={{
                    left: '21vw',
                    top: '35vw',
                    fontSize: '3vw',
                  }}
                >
                  {participant}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
