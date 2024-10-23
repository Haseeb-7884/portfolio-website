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
    color: "#f9004d"
  }

  let socialMedia = {
    height: "30px",
    width: "20%",
    backgroundColor: "white",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  }
  
  let socialMediaIcon = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    padding: "8px",
    backgroundColor: "#e7e7e8",
    borderRadius: "50%",
    color: "black"
  }

  let contactBtn = {
    height: "60px",
    width: "200px",
    marginLeft: "40px",
    backgroundColor: "#f9004d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "22px",
    fontWeight: "bold",
    TextAllign: "center",
    paddingTop: "10px",
  }
  let contactIcon ={   
    fontSize: "20px",
  }

  return (
    <>
      <div className="container_fluid" style={HeaderContainerStyle}>
        <div className='border border-2 border-danger' style={header_img}>
          <img src="/images/profile-img.jpg" alt="" style={header_mian_img} />
        </div>
        <div className="text-center">
          <p className="text-secondary mt-3 mb-3">Welcome to my portfolio</p>
          <h1 style={firstHeding}>Hi, I'm Muhammad Usman</h1>
          <h1 style={SecondHeding}>Web Developer.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ex recusandae itaque, doloremque dicta accusamus.
          </p>
          <section style={socialMedia}>
            <a target='_blank' href="https://www.linkedin.com/in/muhammad-usman-312985241/" style={socialMediaIcon}><i className="fa-brands fa-linkedin-in"></i></a>
            <a target='_blank' href="#" style={socialMediaIcon}><i class="fa-brands fa-facebook"></i></a>
            <a target='_blank' href="https://github.com/Haseeb-7884" style={socialMediaIcon}><i class="fa-brands fa-github"></i></a>
            <a target='_blank' href="#" style={socialMediaIcon}><i class="fa-brands fa-instagram"></i></a> 
            <a target='_blank' href="#" style={socialMediaIcon}><i class="fa-brands fa-skype"></i></a> 
          </section>
          <a href="" className='mt-4 btn' style={contactBtn}>Contact Me 
          <i style={contactIcon} className="fa-solid fa-greater-than ms-3"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header
