export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  };
  return (
    <div className="grid-cell" style={styles} onClick={props.holdDice}>
      <h1 className="grid-num">{props.value}</h1>
    </div>
  );
}
