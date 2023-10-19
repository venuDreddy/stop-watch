import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(true);
  useEffect(() => {
    let intervalId;
    if (stop === false) {
      intervalId = setInterval(() => {
        let n = time + 0.1014;
        setTime(n);
      }, 100);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [time, stop]);
  let totalTime = Math.round(time * 1000) / 1000;
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  return (
    <div>
      <h1 className='time'>
        {time == 0
          ? "0"
          : `${minutes < 10 ? "0" + minutes : minutes}:${(
              seconds + ""
            ).substring(0, 4)}`}
      </h1>
      {time > 0 ? (
        <button
          className='reset-btn'
          onClick={() => {
            setTime(0);
            setStop(true);
          }}
        >
          Reset
        </button>
      ) : (
        ""
      )}
      {stop ? (
        <button
          onClick={() => {
            setStop(false);
          }}
        >
          Start
        </button>
      ) : (
        <button
          onClick={() => {
            setStop(true);
          }}
        >
          Stop
        </button>
      )}
    </div>
  );
}

export default App;
