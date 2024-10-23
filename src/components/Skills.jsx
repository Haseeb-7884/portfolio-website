import { useState } from 'react'
import Expertise from './Expertise.jsx';

function Projects() {

    let skillContainer = {
        borderTop: "1px solid black",
        height: "70vh",
        backgroundColor: "orange",
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
        paddingTop: "50px",
    }

    let skillSubContainerContent = {
        height: "15vh",
        width: "60%",
        margin: "15px 0px 20px 95px",
        backgroundColor: "purple",
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

                </div>

            </div>

        </>
    );
}

export default Projects
