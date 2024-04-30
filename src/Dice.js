export default function Dice(props) {  
    return (
        <div className={"dice-item " + props.green} onClick={props.hold}>
            <h2>{props.value}</h2>
        </div>
    );
  }