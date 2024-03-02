import html from '../../public/assets/html-2.png'
import css from '../../public/assets/css-2.png'
import js from '../../public/assets/js-2.png'
import react from '../../public/assets/react-2.png'
import figma from '../../public/assets/figma-2.png'

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

const Skills = () => {

    return (
        <section className="skills" id="skills">
            <div className="skills_container">
                <h1>Skills</h1>

                <div className="skills_container-card-wrapper flex">
                    <div className="skills_container-subOne">

                        <div className="skills_container-item">
                            <div className="icon-img">
                                <img className='html-img' src={html} alt="html" />
                            </div>

                            <div className="outer-range">
                                <div className="inner-range html"></div>
                            </div>
                            <span className='html-text'>95%</span>
                        </div>


                        <div className="skills_container-item">
                            <div className="icon-img">
                                <img className='css-img' src={css} alt="css" />
                            </div>

                            <div className="outer-range ">
                                <div className="inner-range css"></div>
                            </div>
                            <span className='css-text'>95%</span>
                        </div>

                        <div className="skills_container-item">
                            <div className="icon-img">
                                <img className='js-img' src={js} alt="js" />
                            </div>


                            <div className="outer-range">
                                <div className="inner-range js"></div>
                            </div>
                            <span className='js-text'>80%</span>
                        </div>


                        <div className="skills_container-item">
                            <div className="icon-img">
                                <img className='react-img' src={react} alt="react" />
                            </div>


                            <div className="outer-range ">
                                <div className="inner-range react"></div>
                            </div>
                            <span className='react-text'>80%</span>
                        </div>
                    </div>

                    {/* Second skills container... */}
                    <div className="skills_container-subTwo">
                        <div className="skills_container-item">
                            <div className="icon-img">
                                <img className='figma-img' src={figma} alt="figma" />
                            </div>


                            <div className="outer-range">
                                <div className="inner-range figma"></div>
                            </div>
                            <span className='figma-text'>70%</span>
                        </div>
                    </div>



                    {/* <div className="skills_container-card">

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

                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default Skills
