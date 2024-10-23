import { useState } from 'react'

function Expertise() {

    let expertiseContainer = {
        height: "60vh",
        width: "88%",
        backgroundColor: "orange",
        margin: "50px auto"
    }

    let headingDiv={
        display: "flex",
        alignItems: "center"
    }
    let headingExpertiseMain = {
        fontWeight: "bolder",
        fontSize : "1.5rem"
    }
    let headingExpertiseText = {
        marginLeft:"20px",
        fontWeight: "bolder",
        fontSize : "2rem"
    }
    let ExpertiseContent={
        
    }

    return (
        <>
            <div className="mt-5" style={expertiseContainer}>
                <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                <h1 style={headingExpertiseText}>My Expertise</h1>
                </div>

        <div style={ExpertiseContent}></div>

            </div>
        </>
    );
}

export default Expertise
