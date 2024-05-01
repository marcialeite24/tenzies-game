import './App.css';
import React from "react"
import Confetti from 'react-confetti'
import Dice from "./Dice"
import {nanoid} from "nanoid"

export default function App() {
  const [dice, setdice] = React.useState(allNewDices())
  const [tenzies, setTenzies] = React.useState(false)
  const diceElements = dice.map(n => 
    <Dice key={n.id} value={n.value} green={n.isHeld ? "green" : ""} hold={() => holdDice(n.id)} />
  )

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

  function rollDice() {
    if(tenzies) {
      setdice(allNewDices())
      setTenzies(false)
    } else {
      setdice(oldDice => oldDice.map(n => {
        return n.isHeld ? n : {...n, value: Math.floor(Math.random() * 6) + 1, id: nanoid()}
      }))
    }
  }

  function holdDice(id) {
    setdice(oldDice => oldDice.map(n => {
      return n.id === id ? {...n, isHeld: !n.isHeld} : n
    }))
  }

  React.useEffect(() => {
    const allHeld = dice.every(n => n.isHeld)
    const allEqual = dice.every(n => n.value === dice[0].value)
    if(allHeld && allEqual) {
      setTenzies(true)
      console.log("You won!")
    } 
  }, [dice])

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>    
  );
}
