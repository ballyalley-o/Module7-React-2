import { useState, useContext } from "react"
import { EmojiContext } from "../context/EmojiContext"; 
import Calculator from "./Calculator"
import Clock from "./Clock"

function EmojiChange() {

  const {mood, setMood, hi, love} = useContext(EmojiContext) //this way the same context value is reused across components
  const [text, setText] = useState("Hi, there!")

  const handleClick = () => {
    if (mood === hi) {
      setMood(love)
      setText("love ya!")
    } else {
      setMood(hi)
      setText("Hi, there!")
    }
  }

  return (
    <>
      <div className="container">
        <div className="emojiCard">
          <div className="emoticons">{mood}</div>
          <div className="texts">{text}</div>
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-secondary"
          >
            Change Me
          </button>
        </div>
      </div>
      <br />
      <div>
        <Calculator />
        
      </div>
      <br />
    </>
  );
}

export default EmojiChange
