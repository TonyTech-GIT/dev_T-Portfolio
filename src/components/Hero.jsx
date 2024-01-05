import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import person from "../../public/assets/person.jpg"

const Hero = () => {

    return (
        <section className="hero">
            <div className="hero_container flex">
                <LazyLoadImage className="hero_container-img"
                    src={person}
                    effect='blur'
                    alt='person' />
                {/* <div className="hero_container-img">

                </div> */}

                <div className="hero_container-text">
                    <h1>Hi, My name is Anthony, i specialize in making websites and webpages amazing, unique and everything in between.</h1>
                    <p>I look forward to working with you.</p>
                    <div className="cta_container flex">
                        <a href="#contact" className="hire">Hire</a>
                        <a href="#works" className="know-more" >Know More</a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
