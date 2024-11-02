import { useState } from 'react'

function Blogs() {

  let BlogsContainer = {
    // backgroundColor: "orange",
    height: "62vh",
    borderBottom: "1px solid grey"
  }

  let BlogsSubcontainer = {
    height: "100%",
    width: "88%",
    margin: "0 auto",
    // backgroundColor: "cyan",

  }

  let headingDiv = {
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    paddingTop: "45px"
  }
  let headingExpertiseMain = {
    fontWeight: "bolder",
    fontSize: "1.5rem"
  }
  let headingExpertiseText = {
    marginLeft: "20px",
    fontWeight: "bolder",
    fontSize: "2rem"
  }
  let BlogSubcontainerContent = {
    height: "35vh",
    // backgroundColor:"red",
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "50px"
  }
  let BlogContainer = {
    backgroundColor: "#eaf6ff",
    flex: "2",
    height: "100%",
    padding: "20px",
  }
  let BlogHeading = {
    fontWeight: "bolder",
  }
  let BlogPara = {
    fontSize: "16px",
  }
  let BlogBtn = {
    color: "black",
    textDecoration: "none",
    fontWeight: "bolder",
  }
  let IconBtnBlog = {
    fontSize: "12px",
  }

  // let Blogs = [
  //   id
  // ]

  return (
    <>
      <div style={BlogsContainer}>
        <div style={BlogsSubcontainer}>

          <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
            <h1 style={headingExpertiseText}>Latest Blog Posts</h1>
          </div>

          <div style={BlogSubcontainerContent}>

            <section style={BlogContainer}>
              <p>
                <span> <i class="fa-solid fa-calendar-days"></i> Dec 02, 2022</span>
                <span className='ms-3'> <i class="fa-solid fa-user"></i> Shelly Percy</span>
              </p>
              <h4 style={BlogHeading}>Top 5 Tips To Create An Eye catching website</h4>
              <p style={BlogPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet.
              </p>
              <a href="" style={BlogBtn}>Read More <i class="fa-solid fa-greater-than"></i></a>
            </section>

            <section style={BlogContainer}>
              <p>
                <span> <i class="fa-solid fa-calendar-days"></i> Dec 02, 2022</span>
                <span className='ms-3'> <i class="fa-solid fa-user"></i> Shelly Percy</span>
              </p>
              <h4 style={BlogHeading}>Top 5 Tips To Create An Eye catching website</h4>
              <p style={BlogPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet.
              </p>
              <a href="" style={BlogBtn}>Read More <i class="fa-solid fa-greater-than"></i></a>
            </section>

            <section style={BlogContainer}>
              <p>
                <span> <i class="fa-solid fa-calendar-days"></i> Dec 02, 2022</span>
                <span className='ms-3'> <i class="fa-solid fa-user"></i> Shelly Percy</span>
              </p>
              <h4 style={BlogHeading}>Top 5 Tips To Create An Eye catching website</h4>
              <p style={BlogPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet.
              </p>
              <a href="" style={BlogBtn}>Read More <i class="fa-solid fa-greater-than"></i></a>
            </section>

          </div>


        </div>
      </div>
    </>
  );
}

export default Blogs
