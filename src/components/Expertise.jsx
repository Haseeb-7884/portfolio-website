import { useState } from 'react'

function Expertise() {

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
    let ExpertiseContent = {
        marginTop: "40px",
        height: "30vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }

    let ExertiseContentFirst = {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "50px"
    }

    let ExertiseContentFirstSection = {
        flex: "1",
        height: "100%",
        padding: "20px"
    }
    let firstContainerIcon = {
        height: "80px",
        width: "80px",
        backgroundColor: "#f0efff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
    }

    // Expertise data here 

    let expertise = [
        {
            id: 1,
            img: "/images/expertise/01.PNG",
            name: "Product Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos excepturi ut."

        },
        {
            id: 2,
            img: "/images/expertise/02.PNG",
            name: "Web Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos excepturi ut."

        },
        {
            id: 3,
            img: "/images/expertise/03.PNG",
            name: "App Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos excepturi ut."

        },
    ]

    // let items1 = expertise.slice(0, 1)

    return (
        <>
            <div className="mt-5" style={expertiseContainer}>
                <div style={headingDiv}><span style={headingExpertiseMain}> &mdash;&mdash;&mdash; </span>
                    <h1 style={headingExpertiseText}>My Expertise</h1>
                </div>

                <div style={ExpertiseContent}>
                    <div style={ExertiseContentFirst}>


                        {expertise.map(items =>

                            <section key={items.id} style={ExertiseContentFirstSection}>
                                <div style={firstContainerIcon}>
                                    <img src={items.img} alt="" />
                                </div>
                                <h3 style={{ marginTop: "20px", fontWeight: "bolder", fontSize: "1.5rem" }}>
                                    {items.name}
                                </h3>
                                <p>
                                    {items.description}
                                </p>
                            </section>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Expertise
