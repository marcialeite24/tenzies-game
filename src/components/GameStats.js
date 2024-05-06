import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDice } from '@fortawesome/free-solid-svg-icons';

export default function GameStats(props) {
    const minutes = ("0" + Math.floor((props.time / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((props.time / 1000) % 60)).slice(-2);
    const milliseconds = ("0" + ((props.time / 10) % 100)).slice(-2);

    const bestMinutes = ("0" + Math.floor((props.bestTime / 60000) % 60)).slice(-2);
    const bestSeconds = ("0" + Math.floor((props.bestTime / 1000) % 60)).slice(-2);
    const bestMilliseconds = ("0" + ((props.bestTime / 10) % 100)).slice(-2);

    return (
        <div className='game-stats'>
            <p><FontAwesomeIcon icon={faDice} /> <span className='bold'>Dice Rolls:</span> {props.rolls}</p>
            <p><FontAwesomeIcon icon={faDice} /> <span className='bold'>Best Rolls:</span> {props.bestRolls}</p>
            <p><FontAwesomeIcon icon={faClock} /> <span className='bold'>Time elapsed:</span> {minutes}:{seconds}:{milliseconds}</p>
            <p><FontAwesomeIcon icon={faClock} /> <span className='bold'>Best Time:</span> {bestMinutes}:{bestSeconds}:{bestMilliseconds}</p>
        </div>
    );
}