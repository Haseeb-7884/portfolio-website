import { useState } from 'react'

function Footer() {

    let mainFooter = {
        backgroundColor: "#f6f9fc",
        height: "45vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
    }

    let FooterSection = {
        height: "75%",
        flex: 1,
        padding: "0px 0px 0px 60px",
        // backgroundColor: "purple"
    }

    let FooterSectionHeading = {
        fontFamily: "sans-serif",
        fontSize: "25px",
        fontWeight: "bolder"
    }

    let FooterSectionPara = {
        // backgroundColor: "orange",
        textAlign: "left",
        fontSize: "14px"
    }

    let FooterSectionIcons = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "55%"
    }

    let FooterSectionIconsDisplay = {
        backgroundColor: "black",
        height: "26px",
        width: "26px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        fontSize: "13px",
        textDecoration: "none"
    }

    let FooterSectionSecondHeading = {
        fontSize: "20px",
        fontWeight: "bolder",
        padidng: "0px !important",
    }

    let FooterSectionSecondHeadingSpan = {
        padidng: "0px",
        // backgroundColor:"yellow",
        borderBottom: "4px solid red",
    }

    let FooterSectionMenuList = {
        paddingTop: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        listStyle: "none",
        textDecoration: "none",
    }

    let FooterSectionMenuListAnchors = {
        textDecoration: "none",
        color: "black"
    }

    let MainFooterSection = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    }

    let FooterSectionImages = {
        color: "#ffffff",
        backgroundColor: "#f9004d",
        width:"25px",
        height:"25px",
        
    }

    return (
        <div style={mainFooter}>
            <div style={FooterSection}>
                <h2 style={FooterSectionHeading}>usman</h2>
                <p style={FooterSectionPara}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate alias accusamus,
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
                </p>
                <div style={FooterSectionIcons}>
                    <a style={FooterSectionIconsDisplay} href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a style={FooterSectionIconsDisplay} href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    <a style={FooterSectionIconsDisplay} href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a style={FooterSectionIconsDisplay} href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            <div style={FooterSection}>
                <h4 style={FooterSectionSecondHeading}><span style={FooterSectionSecondHeadingSpan}>Explo</span>re</h4>
                <div style={FooterSectionMenuList}>
                    <a style={FooterSectionMenuListAnchors} href="#">Home</a>
                    <a style={FooterSectionMenuListAnchors} href="#">About</a>
                    <a style={FooterSectionMenuListAnchors} href="#">Services</a>
                    <a style={FooterSectionMenuListAnchors} href="#">Portfolio</a>
                </div>
            </div>
            <div style={FooterSection}>
                <h4 style={FooterSectionSecondHeading}><span style={FooterSectionSecondHeadingSpan}>Quick</span> Links</h4>
                <div style={FooterSectionMenuList}>
                    <a style={FooterSectionMenuListAnchors} href="#">FAQs</a>
                    <a style={FooterSectionMenuListAnchors} href="#">Contact</a>
                    <a style={FooterSectionMenuListAnchors} href="#">Privacy Policy</a>
                    <a style={FooterSectionMenuListAnchors} href="#">Term & Conditions</a>
                </div>
            </div>
            <div style={FooterSection}>
                <h4 style={FooterSectionSecondHeading}><span style={FooterSectionSecondHeadingSpan}>Get</span> <span style={FooterSectionSecondHeadingSpan}>in</span> Touch</h4>
                <div>
                    <section style={MainFooterSection}>
                        <i style={FooterSectionImages} class="fa-solid fa-location-dot"></i>
                        <p>2750 Quadra Street Victoria, Canada</p>
                    </section>
                    <section>
                        <i></i>
                        <p>+330 600-7684</p>
                    </section>
                    <section>
                        <i></i>
                        <p>usmananees040@gmail.com</p>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default Footer