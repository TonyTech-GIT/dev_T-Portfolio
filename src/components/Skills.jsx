import html from '../../public/assets/html.png'
import css from '../../public/assets/css1.png'
import js from '../../public/assets/js.png'
import react from '../../public/assets/react.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills_container">
                <h1>Skills</h1>

                <div className="skills_container-card-wrapper flex">
                    <div className="skills_container-card">

                        <LazyLoadImage className='html-img' src={html}
                            effect='blur'
                            alt=" html" />

                        <h3 className="html-text">HTML</h3>

                    </div>

                    <div className="skills_container-card">

                        <LazyLoadImage className='css-img' src={css}
                            effect='blur'
                            alt="css" />

                        <h3 className="css-text">CSS</h3>

                    </div>

                    <div className="skills_container-card">
                        {/* <div className="skills_container-card-img">
                        
                    </div> */}
                        <LazyLoadImage className='js-img' src={js}
                            effect='blur'
                            alt="js" />

                        <h3 className="js-text">JAVASCRIPT</h3>

                    </div>

                    <div className="skills_container-card">

                        <LazyLoadImage className='react-img'
                            src={react}
                            effect='blur'
                            alt="react" />

                        <h3 className="react-text">REACT</h3>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
