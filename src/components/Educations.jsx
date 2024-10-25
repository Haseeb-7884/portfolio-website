import { useState } from 'react'

function Educations() {

    let expertiseContainer = {
        height: "40vh",
        width: "88%",
        margin: "50px auto"
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

    let EducationContainer = {
        height: "40vh",
    }

    let EducationSubContainer = {
        backgroundColor: "purple",
        width: "88%",
        margin: "0 auto",
        height: "30vh"
    }

    return (
        <>
            <div style={EducationContainer}>
                <div style={EducationSubContainer}>
                    <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                        <h1 style={headingExpertiseText}>My Skills</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Educations
