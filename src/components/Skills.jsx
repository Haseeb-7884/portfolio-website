import { useState } from 'react'
import Expertise from './Expertise.jsx';

function Projects() {

    let skillContainer = {
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
        height: "65vh",
    }

    let headingDiv = {
        display: "flex",
        alignItems: "center"
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

    let skillSubContainer = {
        height: "40vh",
        margin: "0 auto",
        width: "88%",
        paddingTop: "70px",
    }

    let skillSubContainerContent = {
        height: "15vh",
        width: "60%",
        margin: "15px 0px 18px 95px",
    }

    let skillSubContainerSections = {
        height:"15vh",
        width:"100%",
        display : "flex",
        justifyContent: "space-between",
        alignItems:"center",
        gap:"40px"
    }

    let skillSubContainerSectionsItems = {
        backgroundColor:"#ffefef",
        height:"100%",
        flex:"1",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        padding: "10px 40px 10px 40px"
    }


    return (
        <>
            <div style={skillContainer}>


                <div style={skillSubContainer}>
                    <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                        <h1 style={headingExpertiseText}>My Skills</h1>
                    </div>

                    <div style={skillSubContainerContent}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ut, incidunt necessitatibus nisi aperiam veniam temporibus qui magnam nulla alias.
                    Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolore!
                    </div>

                    <div style={skillSubContainerSections}>
                        <section style={skillSubContainerSectionsItems}>
                        <i style={{fontSize:"40px"}} class="fa-brands fa-html5"></i>
                         <strong style={{fontSize:"25px"}}> HTML</strong>
                        </section>

                        <section style={skillSubContainerSectionsItems}>
                        <i style={{fontSize:"35px"}} class="fa-brands fa-bootstrap"></i>
                        <strong style={{fontSize:"20px"}}> Bootstap</strong>
                        </section>

                        <section style={skillSubContainerSectionsItems}>
                        <i style={{fontSize:"35px"}} class="fa-brands fa-js"></i>
                        <strong style={{fontSize:"20px"}}> JavaScript</strong>
                        </section>

                        <section style={skillSubContainerSectionsItems}>
                        <i style={{fontSize:"40px"}} class="fa-brands fa-php"></i>
                        <strong style={{fontSize:"25px"}}> PHP</strong>
                        </section>

                        <section style={skillSubContainerSectionsItems}>
                        <i style={{fontSize:"40px"}} class="fa-brands fa-react"></i>
                        <strong style={{fontSize:"25px"}}> React</strong>
                         
                        </section>
                   
                    </div>

                </div>

            </div>

        </>
    );
}

export default Projects
