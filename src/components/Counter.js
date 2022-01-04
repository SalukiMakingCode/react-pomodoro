import '../css/Counter.css';

const Counter = (props) => {
    return (
      <div id="counter">
        {props.minutes} : {props.seconds}
      </div>
    );
}

export default Counter;