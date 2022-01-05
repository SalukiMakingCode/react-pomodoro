import '../css/Action.css';
import './Counter';



const Action = (props) => {
    return (
      <div id="action">
        <div className="bouton" onClick={props.incrementMinutes}>+</div>
        <div className="bouton" onClick={props.isPlaying ? props.stop : props.start}>{props.isPlaying ? 'Stop' : 'Start'}</div>
        <div className="bouton" onClick={props.reset}>Reset</div>
        <div className="bouton" onClick={props.decrementMinutes}>-</div>
      </div>
    );
}

export default Action;