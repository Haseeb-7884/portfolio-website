import { useState } from 'react'

function Footer() {

    let mainFooter = {
        backgroundColor: "#f6f9fc",
        height: "40vh"
    }

    let FooterSection = {

    }

    return (
        <div style={mainFooter}>
            <div style={FooterSection}>
                <h2>usman</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate alias accusamus, .</p>
            </div>
            <div style={FooterSection}></div>
            <div style={FooterSection}></div>
            <div style={FooterSection}></div>
        </div>
    )

}

export default Footer