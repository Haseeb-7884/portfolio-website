import { useState } from 'react'

function Header() {

let HeaderContainerStyle = {
    backgroundColor:"#fbf8f8",
    height: "40vh",

};

  return (
    <>
      <div className="container_fluid" style={HeaderContainerStyle}>
        <h1>Usman</h1>
      </div>
    </>
  );
}

export default Header
