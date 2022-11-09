import React from 'react'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <div>
      <header style={headerStyles}>
        <div className="slide18Title">
          <h2>{text}</h2>
        </div>
      </header>
      <br />
      <h1 style={{ textAlign: "center" }} id="exercise">
        Exercise 1 (React Hooks version of Module 6/ App)
      </h1>
    </div>
  );
}

Header.defaultProps = {
  text: "Slide18",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "white",
};


export default Header