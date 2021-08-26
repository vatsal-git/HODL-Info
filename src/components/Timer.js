import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (seconds <= 60) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="timer">
      <div className="time">{seconds}</div>
    </div>
  );
};

export default Timer;
