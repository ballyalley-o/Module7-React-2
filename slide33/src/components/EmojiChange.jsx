import { useState, useContext } from "react"
import { EmojiContext } from "../context/EmojiContext";
import Calculator from "./Calculator"
import Clock from "./Clock"

function EmojiChange() {
  const hi = "👋";
  const love = "🫶";

  const [mood, setMood] = useState(hi)
  const [text, setText] = useState("Hi, there!")

  const handleClick = () => {
    if (hi) {
      setMood(love)
      setText("love ya!")
    } else if (love) {
      setMood(hi)
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
        <EmojiContext.Provider value={{ mood, setMood }}>
          <Clock />
        </EmojiContext.Provider>
      </div>
      <br />
    </>
  );
}

export default EmojiChange
