export default function Dice(props) {  
    const pips = props.value ? Array(props.value).fill().map((_,i) => <span key={i}  className="dice-pip" />) : null;
    return (
        <div className={"dice-face " + props.green} onClick={props.hold}>
            {pips}
        </div>
    );
  }