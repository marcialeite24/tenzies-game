export default function GameStats(props) {
    const minutes = ("0" + Math.floor((props.time / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((props.time / 1000) % 60)).slice(-2);
    const milliseconds = ("0" + ((props.time / 10) % 100)).slice(-2);

    return (
        <div>
            <p>Dice Rolls: {props.rolls}</p>
            <p>Time elapsed: {minutes}:{seconds}:{milliseconds}</p>
        </div>
    );
}