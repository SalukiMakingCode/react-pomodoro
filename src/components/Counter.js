import '../css/Counter.css';
import useNumberFormatter from '../hooks/useNumberFormatter';

const Counter = (props) => {
    const {to2Digits} = useNumberFormatter();
    return (
      <div id="counter">
        {to2Digits(props.minutes)} : {to2Digits(props.seconds)}
      </div>
    );
}

export default Counter;