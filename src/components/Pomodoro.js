import '../css/Pomodoro.css';
import Counter from './Counter';
import Action from './Action';
import useCounter from "../hooks/useCounter";
import ModalUnstyledDemo from "./Modal";

const Pomodoro = () => {
    const {minutes, seconds, decrementMinutes, decrementSeconds, incrementMinutes, incrementSeconds, isPlaying, isFinish, start, stop, reset} = useCounter();

    if (isFinish) return (
      <main>
        <Counter minutes={minutes} seconds={seconds}/>
        <Action decrementMinutes={decrementMinutes} decrementSeconds={decrementSeconds} incrementMinutes={incrementMinutes} incrementSeconds={incrementSeconds} isPlaying={isPlaying} start={start} stop={stop} reset={reset}/>
        <ModalUnstyledDemo start={start} reset={reset} incrementMinutes={incrementMinutes}/>
      </main>
    );

    else return (
      <main>
          <Counter minutes={minutes} seconds={seconds}/>
          <Action decrementMinutes={decrementMinutes} decrementSeconds={decrementSeconds} incrementMinutes={incrementMinutes} incrementSeconds={incrementSeconds} isPlaying={isPlaying} start={start} stop={stop} reset={reset}/>
      </main>
    );
}

export default Pomodoro;