import html from '../../public/assets/html.png'
import css from '../../public/assets/css1.png'
import js from '../../public/assets/js.png'
import react from '../../public/assets/react.png'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills_container">
                <h1>Skills</h1>

                <div className="skills_container-card-wrapper flex">
                    <div className="skills_container-card">

                        <img src={html} alt=" html" />

                        <h3>HTML</h3>

                    </div>

                    <div className="skills_container-card">

                        <img src={css} alt="css" />

                        <h3>CSS</h3>

                    </div>

                    <div className="skills_container-card">
                        {/* <div className="skills_container-card-img">
                        
                    </div> */}
                        <img src={js} alt="js" />

                        <h3>JS</h3>

                    </div>

                    <div className="skills_container-card">

                        <img src={react} alt="react" />

                        <h3 className="react-text">REACT</h3>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
