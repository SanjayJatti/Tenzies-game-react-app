import React from "react";
import "./styles.css";
import Die from "./Components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
      id: nanoid()
    };
  }

  function allNewDice() {
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push(generateNewDie());
    }
    return numArray;
  }
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));
  return (
    <main className="App">
      <div className="grid-container">{diceElements}</div>
      <button onClick={rollDice} className="button-roll">
        Roll
      </button>
    </main>
  );
}
