import html from '../../public/assets/html.png'
import css from '../../public/assets/css1.png'
import js from '../../public/assets/js.png'
import react from '../../public/assets/react.png'
import figma from '../../public/assets/figma-1.png'
import { useState } from 'react'

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

const Skills = () => {
    const [htmlValue, setHtmlValue] = useState(95)
    const [cssValue, setCssValue] = useState(95)
    const [jsValue, setJsValue] = useState(80)
    const [reactValue, setReactValue] = useState(80)
    const [figmaValue, setFigmaValue] = useState(70)
    return (
        <section className="skills" id="skills">
            <div className="skills_container">
                <h1>Skills</h1>

                <div className="skills_container-card-wrapper flex">
                    <div className="skills_container-subOne">
                        <div className="skills_container-item">
                            <img className='html-img' src={html} alt="html" />

                            <input
                                className='html-range'
                                type="range"
                                min="0"
                                value={htmlValue}
                                max="100"
                                disabled
                                onChange={(e) => setHtmlValue(e.target.value)}
                            />
                            <span className='html-text'>{htmlValue}%</span>
                        </div>

                        <div className="skills_container-item">
                            <img className='css-img' src={css} alt="css" />

                            <input
                                className='css-range'
                                type="range"
                                min="0"
                                value={cssValue}
                                max="100"
                                disabled
                                onChange={(e) => setCssValue(e.target.value)}

                            />
                            <span className='css-text'>{cssValue}%</span>
                        </div>

                        <div className="skills_container-item">
                            <img className='js-img' src={js} alt="js" />

                            <input
                                className='js-range'
                                type="range"
                                min="0"
                                value={jsValue}
                                max="100"
                                disabled
                                onChange={(e) => setJsValue(e.target.value)}

                            />
                            <span className='js-text'>{jsValue}%</span>
                        </div>

                        <div className="skills_container-item">
                            <img className='react-img' src={react} alt="react" />

                            <input
                                className='react-range'
                                type="range"
                                min="0"
                                value={reactValue}
                                max="100"
                                disabled
                                onChange={(e) => setReactValue(e.target.value)}

                            />
                            <span className='react-text'>{reactValue}%</span>
                        </div>
                    </div>
                    {/* Second skills container... */}
                    <div className="skills_container-subTwo">
                        <div className="skills_container-item">
                            <img className='figma-img' src={figma} alt="figma" />

                            <input
                                className='figma-range'
                                type="range"
                                min="0"
                                value={figmaValue}
                                max="100"
                                disabled
                                onChange={(e) => setFigmaValue(e.target.value)}

                            />
                            <span className='figma-text'>{figmaValue}%</span>
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
