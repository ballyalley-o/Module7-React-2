import { useState } from "react"
import Header from "./Header"

function EmojiChange() {
  const hi = "👋";
  const love = "🫶";

  const [mood, setMood] = useState(hi);
  const [text, setText] = useState("Hi, there!");

  const handleClick = () => {
    setMood(love);
    setText("love ya!");
  };

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
    </>
  );
}

export default EmojiChange
