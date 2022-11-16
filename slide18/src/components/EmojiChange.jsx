import { useState } from "react"
import Header from "./Header"

function EmojiChange() {
  const hi = "👋";
  const love = "🫶";

  const [mood, setMood] = useState(hi);
  const [text, setText] = useState("Hi, there!"); //this is not really the Greeting component from Mod 6 Exercise 2, but it does still show a greeting

  const handleClick = () => {
    if (mood === hi) //just so you can switch between moods
    {
      setMood(love);
      setText("love ya!");
    }
    else{
      setMood(hi);
      setText("Hi, there!");      
    }
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
