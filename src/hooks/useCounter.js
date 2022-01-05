import { useState } from 'react';
import useInterval from './useInterval';

export default function useCounter() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalTime, setIntervalTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const increment = (type) => {
    if (type === 'minutes') {
      return setMinutes(minutes + 1);
    }

    return setSeconds(seconds + 1);
  };

  const decrement = (type) => {
    if (type === 'minutes') {
      if (minutes>0) return setMinutes(minutes - 1);

      return
    }

    return setSeconds(seconds - 1);
  };

  const start = () => {
    setIsPlaying(true);
    setIntervalTime(1000);
    setIsFinish(false);
  };

  const stop = () => setIsPlaying(false);

  const reset = () => {
    setIntervalTime(0);
    setIsPlaying(false);
    setMinutes(0);
    setSeconds(0);
    setIsFinish(false);
  };

  useInterval(() => {
    if (!isPlaying) {
      return;
    }

    if (minutes === 0 && seconds === 0) {
      reset();
      setIsFinish(true);

      return;
    }

    decrement('seconds');
    if (seconds<=0) {
      setSeconds(59);
      decrement('minutes');
    }
  }, intervalTime);

  return {
    minutes,
    seconds,
    incrementMinutes: () => increment('minutes'),
    incrementSeconds: () => increment('seconds'),
    decrementMinutes: () => decrement('minutes'),
    decrementSeconds: () => decrement('seconds'),
    start,
    stop,
    reset,
    isPlaying,
    isFinish,
  };
}