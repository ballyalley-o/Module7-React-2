import { useState, useEffect } from "react"

function Clock() {
  const [clocker, setClocker] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClocker(date.toLocaleTimeString());
    }, 500);
  }, []);
  return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }} id="exercise">
        Exercise 2 (Clock component)
      </h1>
      <div className="container">
        <br />
        <h1 className="clocker">{clocker}</h1>
      </div>
    </>
  );
}

export default Clock
