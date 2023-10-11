
const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills_container">
                <h1>Skills</h1>

                <div className="skills_container-card-wrapper flex">
                    <div className="skills_container-card">

                        <img src="../../public/assets/html.png" alt="html" />

                        <h3>HTML</h3>

                    </div>

                    <div className="skills_container-card">

                        <img src="../../public/assets/css1.png" alt="css" />

                        <h3>CSS</h3>

                    </div>

                    <div className="skills_container-card">
                        {/* <div className="skills_container-card-img">
                        
                    </div> */}
                        <img src="../../public/assets/js.png" alt="js" />

                        <h3>JS</h3>

                    </div>

                    <div className="skills_container-card">

                        <img src="../../public/assets/react.png" alt="react" />

                        <h3 className="react-text">REACT</h3>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
