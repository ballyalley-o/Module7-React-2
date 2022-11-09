import React from 'react'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: "#F2EEEA",
  }

  return (
    <div>
      <header style={headerStyles}>
        <div className="slide18Title">
          <h2>{text}</h2>
        </div>
      </header>
    <br />
      <h1 style={{ textAlign: "center" }} id="exercise">
        Exercise 1 (<i>"Stateless"</i> App component)
      </h1>
    </div>
  );
}

Header.defaultProps = {
  text: "Slide33",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#F2EEEA",
};


export default Header