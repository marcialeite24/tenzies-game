import './App.css';
import React from "react"
import Dice from "./Dice"
import {nanoid} from "nanoid"

export default function App() {
  function allNewDices() {
    const newDice = new Array()
    for(let i=0; i<10; i++) {
        newDice.push({
          value: Math.floor(Math.random() * 6) + 1,
          isHeld: false,
          id: nanoid()
        })
    }
    return newDice
  }

  const [dice, setdice] = React.useState(allNewDices())
  const diceElements = dice.map(n => 
    <Dice key={n.id} value={n.value} green={n.isHeld ? "green" : ""} hold={() => holdDice(n.id)} />
  )

  function rollDice() {
    return setdice(allNewDices())
  }

  function holdDice(id) {
    console.log(id)
  }

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollDice}>Roll</button>
    </main>    
  );
}
