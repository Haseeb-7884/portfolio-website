import { useState } from 'react'
import Expertise from './Expertise.jsx';

function Projects() {

    let projectContainer = {
        height: "110vh",
        with: "100%",
        marginBottom: "30px",
        // backgroundColor: "violet",
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
        paddingTop: "50px"
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
    let productContentItemsColor1 = {
        height:"100%",
        width:"100%",
        backgroundColor:"#f0efff",
        overflow:"hidden"
    }
    let productContentItemsColor2 = {
        height:"100%",
        width:"100%",
        backgroundColor:"#fef5e4",
        overflow:"hidden"
    }
    let productContentItemsColor3 = {
        height:"100%",
        width:"100%",
        backgroundColor:"#f5f9e8",
        overflow:"hidden"
    }

    let productImages = {
        height:"100%",
        width:"80%",
        marginLeft:"45px",
        marginTop:"30px"
    }
    let productBtn = {
        display:"inline-block",    
        marginTop:"25px",
        backgroundColor:"#f9004d",
        padding:"14px",
        marginLeft:"45%",
        textDecoration:"none",
        color:"white",
        fontWeight:"bolder",
        fontSize:"20px",
        borderRadius:"5px"
    }
    

    // #fef5e4


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
                                <div style={productContentItemsColor1}>
                                    <img style={productImages} src="/images/projects/01.png" alt="" />
                                </div>
                            </section>

                            <section style={productContentItems}>
                            <div style={productContentItemsColor2}>
                                    <img style={productImages} src="/images/projects/02.png" alt="" />
                                </div>
                            </section>


                            <section style={productContentItems}>
                            <div style={productContentItemsColor3}>
                                    <img style={productImages} src="/images/projects/03.png" alt="" />
                                </div>
                            </section>

                        </div>
                    </div>

                    <a href="#" style={productBtn}>
                        View More
                        <i style={{fontSize:"17px"}} className="fa-solid fa-greater-than ms-3"></i>
                    </a>


                </div>
            </div>
        </>
    );
}

export default Projects
