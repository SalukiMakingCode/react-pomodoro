import '../css/Pomodoro.css';
import Counter from './Counter';
import Action from './Action';
import { useState } from "react";

const Pomodoro = () => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [timerOn, setTimerOn] = useState(false);
    return (
      <main>
        <Counter minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds}/>
        <Action minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} timerOn={timerOn} setTimerOn={setTimerOn} />
      </main>
    );
}

export default Pomodoro;