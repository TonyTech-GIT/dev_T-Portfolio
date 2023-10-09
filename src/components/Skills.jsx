
const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills_container">
                <h1>Skills:</h1>

                <div className="skills_container-card-wrapper flex">
                    <div className="skills_container-card">

                        <img src="./assets/html.png" alt="html" />

                        <h3>HTML</h3>

                    </div>

                    <div className="skills_container-card">
                        {/* <div className="skills_container-card-img">
                        
                    </div> */}
                        <img src="./assets/css1.png" alt="css" />

                        <h3>CSS</h3>

                    </div>

                    <div className="skills_container-card">
                        {/* <div className="skills_container-card-img">
                        
                    </div> */}
                        <img src="./assets/js.png" alt="html" />

                        <h3>JS</h3>

                    </div>

                    <div className="skills_container-card">

                        <img src="./assets/react.png" alt="html" />

                        <h3 className="react-text">REACT</h3>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
