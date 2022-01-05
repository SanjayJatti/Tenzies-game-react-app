import React from "react";
import "./styles.css";
import Die from "./Components/Die";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push(Math.floor(Math.random() * 6 + 1));
    }
    return numArray;
  }
  const diceElements = dice.map((item) => <Die value={item} />);
  return (
    <main className="App">
      <div className="grid-container">{diceElements}</div>
    </main>
  );
}
