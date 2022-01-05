import React from "react";
import "./styles.css";
import Die from "./Components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid()
      });
    }
    return numArray;
  }
  function rollDice() {
    setDice(allNewDice());
  }
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }
  const diceElements = dice.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      holdDice={() => holdDice(item.id)}
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
