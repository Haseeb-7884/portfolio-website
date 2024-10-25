import { useState } from 'react'

function Blogs() {

  let BlogsContainer = {
    backgroundColor:"orange",
    height:"60vh"
  }

  let BlogsSubcontainer = {
    height: "100%",
    width:"88%",
    margin:"0 auto",
    backgroundColor:"cyan",
    
  }

  return (
    <>
        <div style={BlogsContainer}>
          <div style={BlogsSubcontainer}>

          </div>
        </div>
    </>
  );
}

export default Blogs
