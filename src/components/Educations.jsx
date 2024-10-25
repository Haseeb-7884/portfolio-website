import { useState } from 'react'

function Educations() {

    let expertiseContainer = {
        height: "40vh",
        width: "88%",
        margin: "0 auto"
    }

    let headingDiv = {
        display: "flex",
        alignItems: "center",
        paddingLeft:"20px"
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
        height: "98vh",
        // backgroundColor: "orange",
        borderBottom: "1px solid grey"
    }

    let EducationSubContainer = {
        // backgroundColor: "orange",
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
        // backgroundColor: "purple",
        paddingTop: "70px",
    }
    let EducationSubContainerRight = {
        // backgroundColor: "blue",
        flex: "1",
        height: "100%",
        paddingTop: "70px"
    }

    let ContentDescriptionSection = {
        height: "65vh",
        width: "100%",
        display: "flex",
        marginTop: "40px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // backgroundColor: "violet",
    }

    let DescriptionDetails = {
        flex: "1",
        width: "100%",
        // backgroundColor: "Indigo",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    let DetailsDescriptionLines = {
        // backgroundColor: "yellow",
        height: "100%",
        width: "7%",
        paddingTop: "3px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    let CircledElement = {
        height: "20px",
        width: "20px",
        backgroundColor: "#2c2e3b",
        borderRadius: "50%"
    }

    let LinedElement = {
        width: "2px",
        height: "100%",
        backgroundColor: "#e5e5e5",

    }

    let DetailsDescriptionContent = {
        // backgroundColor: "cyan",
        height: "100%",
        width: "93%",
        display: "flex",
        flexDirection: "column"
    }

    return (
        <>
            <div style={EducationContainer}>
                <div style={EducationSubContainer}>
                    <div style={EducationSubContainerLeft}>

                        <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                            <h1 style={headingExpertiseText}>My Education</h1>
                        </div>

                        <div style={ContentDescriptionSection}>

                            <section style={DescriptionDetails}>

                                <div style={DetailsDescriptionLines}>

                                    <div style={CircledElement}></div>
                                    <div style={LinedElement}></div>

                                </div>

                                <div style={DetailsDescriptionContent}>

                                    <p style={{ fontSize: "14px" }}>Stanford University - <span className="fw-bold"> 2003 </span></p>

                                    <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>Computer Science</h4>

                                    <p style={{ fontSize: "14px" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate nam officiis fugiat maiores, necessitatibus esse deserunt quis?
                                    </p>

                                </div>
                            </section>

                            <section style={DescriptionDetails}>

                                <div style={DetailsDescriptionLines}>

                                    <div style={CircledElement}></div>
                                    <div style={LinedElement}></div>

                                </div>
                                <div style={DetailsDescriptionContent}>

                                    <p style={{ fontSize: "14px" }}>Stanford University - <span className="fw-bold"> 2003 </span></p>

                                    <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>Computer Science</h4>

                                    <p style={{ fontSize: "14px" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate nam officiis fugiat maiores, necessitatibus esse deserunt quis?
                                    </p>

                                </div>
                            </section>

                            <section style={DescriptionDetails}>

                                <div style={DetailsDescriptionLines}>

                                    <div style={CircledElement}></div>
                                    <div style={LinedElement}></div>

                                </div>
                                <div style={DetailsDescriptionContent}>

                                    <p style={{ fontSize: "14px" }}>Stanford University - <span className="fw-bold"> 2003 </span></p>

                                    <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>Computer Science</h4>

                                    <p style={{ fontSize: "14px" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate nam officiis fugiat maiores, necessitatibus esse deserunt quis?
                                    </p>

                                </div>
                            </section>



                        </div>

                    </div>
                    <div style={EducationSubContainerRight}>

                        <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                            <h1 style={headingExpertiseText}>My Experience</h1>
                        </div>

                        <div style={ContentDescriptionSection}>

                            <section style={DescriptionDetails}>

                                <div style={DetailsDescriptionLines}>

                                    <div style={CircledElement}></div>
                                    <div style={LinedElement}></div>

                                </div>

                                <div style={DetailsDescriptionContent}>

                                    <p style={{ fontSize: "14px" }}>Stanford University - <span className="fw-bold"> 2003 </span></p>

                                    <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>Computer Science</h4>

                                    <p style={{ fontSize: "14px" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate nam officiis fugiat maiores, necessitatibus esse deserunt quis?
                                    </p>

                                </div>
                            </section>

                            <section style={DescriptionDetails}>

                                <div style={DetailsDescriptionLines}>

                                    <div style={CircledElement}></div>
                                    <div style={LinedElement}></div>

                                </div>
                                <div style={DetailsDescriptionContent}>

                                    <p style={{ fontSize: "14px" }}>Stanford University - <span className="fw-bold"> 2003 </span></p>

                                    <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>Computer Science</h4>

                                    <p style={{ fontSize: "14px" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate nam officiis fugiat maiores, necessitatibus esse deserunt quis?
                                    </p>

                                </div>
                            </section>

                            <section style={DescriptionDetails}>

                                <div style={DetailsDescriptionLines}>

                                    <div style={CircledElement}></div>
                                    <div style={LinedElement}></div>

                                </div>
                                <div style={DetailsDescriptionContent}>

                                    <p style={{ fontSize: "14px" }}>Stanford University - <span className="fw-bold"> 2003 </span></p>

                                    <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>Computer Science</h4>

                                    <p style={{ fontSize: "14px" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate nam officiis fugiat maiores, necessitatibus esse deserunt quis?
                                    </p>

                                </div>
                            </section>

                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}

export default Educations
