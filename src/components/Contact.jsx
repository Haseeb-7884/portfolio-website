import { useState } from 'react'

function Contact() {

    let ContactContainer = {
        // backgroundColor: "orange",
        height: "76vh",
        borderBottom: "1px solid grey",
        paddingTop:"30px",
        paddingBottom:"30px",
    }
    let ContactSubContainer = {
        // backgroundColor: "purple",
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
        flex: "1",
    }

    let ContactSubContainerRight = {
        height: "100%",
        flex: "1",
        display: "flex",
        flexDirection: "column",
    }

    let formContainer = {
        border: "1px solid gray",
        padding: "15px",
        height: "72%",
        marginBottom:"10px",
        paddingBottom: "20px"
    }

    let formSectionContainer = {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        width: "100%",
        height: "50px",
        padding: "0px",
        marginBottom: "20px"
    }
    let ContactLeftContainerImg = {
        width: "90%",
        paddingTop: "30px",
        paddingBottom: "20px",
        height: "100%",
    }


    return (
        <>
            <div style={ContactContainer}>
                <div style={ContactSubContainer}>

                    <div style={ContactSubContainerleft}>
                        <img style={ContactLeftContainerImg} src="./images/contact.PNG" alt="" />
                    </div>

                    <div style={ContactSubContainerRight}>
                        <h2 className="mt-3 fw-bold">Hire Me!</h2>
                        <p>I am avilable for freelancing work. Please connect with me via phone:
                            <strong>+92 330 600 7684</strong> or email: <strong>usmananees040@gmail.com</strong></p>

                        <div style={formContainer}>
                            <section style={formSectionContainer}>
                                <input style={{ flex: "1", backgroundColor: "#eeeeee", border: "none", paddingLeft: "10px" }} type="text" placeholder='Name' name="name" />
                                <input style={{ flex: "1", backgroundColor: "#eeeeee", border: "none", paddingLeft: "10px" }} type="email" placeholder='Email' name="email" />
                            </section>

                            <section style={formSectionContainer}>
                                <input style={{ flex: "1", backgroundColor: "#eeeeee", border: "none", paddingLeft: "10px" }} type="number" placeholder='Phone Number' name="name" />
                                <input style={{ flex: "1", backgroundColor: "#eeeeee", border: "none", paddingLeft: "10px" }} type="email" placeholder='Subject' name="email" />
                            </section>

                            <textarea style={{ height: "35%", width: "100%", backgroundColor: "#eeeeee", border: "none", paddingTop: "10px", paddingLeft: "10px" }} placeholder='Write your Message...' name="" id=""></textarea>

                            <div className='d-flex justify-content-center align-items-center mt-2 mb-5'>
                                <input type="submit" value="Send Message" className='btn text-light fw-bold' style={{height:"100%", padding:"10px 15px 10px 15px", backgroundColor:"#f9004d", border:"none"}}/>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact
