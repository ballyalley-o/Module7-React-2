import { useState, useEffect, useContext } from "react"
import { EmojiContext } from "../context/EmojiContext"


function Clock() {
  const [clocker, setClocker] = useState()
  const {mood, setMood} = useContext(EmojiContext)

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClocker(date.toLocaleTimeString());
    }, 500);
  }, []);
  return (
    <>
      <br />
      <div className="container">
        <br />
        <h1 className="clocker">{clocker}</h1>
        <div className="moodSwing">{mood}</div>
        <span>
          <h1 style={{ textAlign: "center" }} id="exercise">
            Exercise 2 (Reflect Emoji to Clock component)
          </h1>
        </span>
      </div>
    </>
  );
}

export default Clock
