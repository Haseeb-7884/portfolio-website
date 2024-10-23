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
        height:"40vh",
           
    }

    return (
        <>
            <div style={skillContainer}>
                <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                    <h1 style={headingExpertiseText}>My Skills</h1>
                </div>

            <div style={skillSubContainer}>

            </div>

            </div>

        </>
    );
}

export default Projects
