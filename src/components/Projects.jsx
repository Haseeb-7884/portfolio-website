import { useState } from 'react'
import Expertise from './Expertise.jsx';

function Projects() {

    let projectContainer = {
        height: "92vh",
        with: "100%",
        marginBottom: "40px",
        backgroundColor: "violet",
        borderTop: "1px solid black",
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

    let productSubcontainer = {
        height: "100%",
        width: "88%",
        margin: "0 auto",
        paddingTop: "30px"
    }

    let productContent = {
        marginTop: "50px",
        width: "100%",
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
    let productContentFirst = {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap:"40px"
    }
    let productContentItems = {
        height:"100%",
        flex:"1",
    }
    let productContentItemsColor = {
        height:"100%",
        width:"100%",
        backgroundColor:"#f0efff",
        overflow:"hidden"
    }
    let productImages = {
        height:"100%",
        width:"80%",
        marginLeft:"45px",
        marginTop:"30px"
    }



    return (
        <>
            <div style={projectContainer}>

                <div style={productSubcontainer}>
                    <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                        <h1 style={headingExpertiseText}>My Projects</h1>
                    </div>
                    <div style={productContent}>
                        <div style={productContentFirst}>

                            <section style={productContentItems}>
                                <div style={productContentItemsColor}>
                                    <img style={productImages} src="/images/projects/01.png" alt="" />
                                </div>
                            </section>

                            <section style={productContentItems}>
                            <div style={productContentItemsColor}>
                                    <img style={productImages} src="/images/projects/02.png" alt="" />
                                </div>
                            </section>


                            <section style={productContentItems}>
                            <div style={productContentItemsColor}>
                                    <img style={productImages} src="/images/projects/03.png" alt="" />
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects
