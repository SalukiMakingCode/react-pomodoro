import '../css/Action.css';
import './Counter';

const Action = (props) => {
    return (
      <div id="action">
        <div className="bouton" onClick={() => props.setMinutes(add(props.minutes))}>+</div>
        <div className="bouton" onClick={() => start(props)}>{props.timerOn ? 'Stop' : 'Start'}</div>
        <div className="bouton" onClick={() => { props.setMinutes('00'); props.setSeconds('00'); props.setTimerOn(false); }}>Reset</div>
        <div className="bouton" onClick={() => props.setMinutes(minus(props.minutes))}>-</div>
      </div>
    );
}

function start(props) {
    props.setTimerOn(!props.timerOn);
}

function add(numb) {
    numb=Number(numb);
    numb++;
    if (numb<10) { numb="0"+numb.toString(10); }

    return numb;
}

function minus(numb) {
    numb=Number(numb);
    numb--;
    if (numb<0) { numb="00"; }
    else if (numb<10) { numb="0"+numb.toString(10); }
    return numb;
}

export default Action;