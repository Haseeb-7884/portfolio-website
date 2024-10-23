import { useState } from 'react'

function Header() {

  let HeaderContainerStyle = {
    backgroundColor: "#fbf8f8",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  let header_img = {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    overflow: "hidden"
  }

  let header_mian_img = {
    height: "100%",
    width: "100%",
    overflow: "hidden"
  }

  let firstHeding = {
    fontWeight: "bolder",
    fontSize: "3rem"
  }

  let SecondHeding = {
    fontWeight: "bolder",
    fontSize: "3rem",
    color: ""
  }

  return (
    <>
      <div className="container_fluid" style={HeaderContainerStyle}>
        <div className='border border-2 border-danger' style={header_img}>
          <img src="/images/profile-img.jpg" alt="" style={header_mian_img} />
        </div>
        <div className="text-center">
          <p className="text-secondary mt-3">Welcome to my portfolio</p>
          <h1 style={firstHeding}>Hi, I'm Muhammad Usman</h1>
          <h1 style={SecondHeding}>Web Developer.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ex recusandae itaque, doloremque dicta accusamus.
          </p>
          <section>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </section>
          <a href="">Contact Me <i></i> </a>
        </div>
      </div>
    </>
  );
}

export default Header
