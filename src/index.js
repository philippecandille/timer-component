import React, { useState } from 'react';

const timerStatus = {
  init: 'Initialized',
  run: 'Running',
  stop: 'Stopped'
};

function Timer() {
  const [time, setTime] = useState(20);
  const [status, setStatus] = useState(timerStatus.init);

  let timer = 0;

  function handleTimerStart() {
    setStatus(timerStatus.run);
    const inMS = time * 1000;
    timer = window.setTimeout(handleTimerEnd, inMS);
  }

  function handleTimerEnd() {
    setStatus(timerStatus.stop);
  }

  function handleTimerChange(evt) {
    setTime(evt.target.value);
  }

  return (
    <div className="timer">
      <div>{status}</div>
      {status === timerStatus.init && (
        <>
          <div>
            <button onClick={handleTimerStart}>Start</button>
          </div>
          <div>
            <input value={time} onChange={handleTimerChange} /> secondes
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;
