import { useState } from 'react'

function Footer() {

    let mainFooter = {
        backgroundColor: "#f6f9fc",
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    }

    let FooterSection = {
        height:"100%",
        flex: 1,
        padding: "0px 90px 0px 90px",
    }

    let FooterSectionPara = {
        backgroundColor: "orange",
    }

    return (
        <div style={mainFooter}>
            <div style={FooterSection}>
                <h2>usman</h2>
                <p style={FooterSectionPara}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate alias accusamus, .</p>
                <div>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div style={FooterSection}>
                <h4><span>Exp</span> <span>lore</span></h4>
                <div>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Portfolio</a>
                </div>
            </div>
            <div style={FooterSection}>
                <h4><span>Qui</span> <span>ck</span> Links</h4>
                <div>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Portfolio</a>
                </div>
            </div>
            <div style={FooterSection}>
                <h4><span>Get</span> <span>in</span> Touch</h4>
                <div>
                    <section>
                        <i></i>
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