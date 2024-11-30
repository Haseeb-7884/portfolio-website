import { useState } from 'react'

function Contact() {

    let ContactContainer = {
        backgroundColor: "orange",
        height: "62vh",
        borderBottom: "1px solid grey"
    }
    let ContactSubContainer = {
        backgroundColor: "purple",
        width: "88%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
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
    let ContactSubContainerleft = {
        height: "100%",
        backgroundColor: "red",
        flex: "1",
    }
    let ContactSubContainerRight = {
        height: "100%",
        backgroundColor: "purple",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
    }

    let formContainer = {
        border: "1px solid black",
        padding: "15px",
    }


    return (
        <>
            <div style={ContactContainer}>
                <div style={ContactSubContainer}>

                    <div style={ContactSubContainerleft}>

                    </div>

                    <div style={ContactSubContainerRight}>
                        <h2>Hire Me!</h2>
                        <p>I am avilable for freelancing work. Please connect with me via phone:
                            <strong>+91 9999999999</strong> or email: <strong>usmananees040@gmail.com</strong></p>

                        <div style={formContainer}>
                            <section></section>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact
