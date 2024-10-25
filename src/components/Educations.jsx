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
        height: "75vh",
        backgroundColor: "orange",
    }

    let EducationSubContainer = {
        backgroundColor: "white",
        width: "88%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",

    }
    let EducationSubContainerLeft = {
        flex: "1",
        height: "100%",
        backgroundColor: "purple",
        paddingTop: "50px"
    }
    let EducationSubContainerRight = {
        backgroundColor: "blue",
        flex: "1",
        height: "100%",
        paddingTop: "50px"
    }


    return (
        <>
            <div style={EducationContainer}>
                <div style={EducationSubContainer}>
                    <div style={EducationSubContainerLeft}>

                        <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                            <h1 style={headingExpertiseText}>My Education</h1>
                        </div>

                    </div>
                    <div style={EducationSubContainerRight}>

                        <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                            <h1 style={headingExpertiseText}>My Experience</h1>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}

export default Educations
