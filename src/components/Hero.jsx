import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import GithubIcon from '../../public/assets/github.png'
import InstagramIcon from '../../public/assets/instagram-3.png'
import LinkedInIcon from '../../public/assets/linkedIn.png'


import person from "../../public/assets/person.jpg"

const Hero = () => {

    return (
        <section className="hero" id='hero'>
            <div className="hero_container flex">
                <LazyLoadImage className="hero_container-img"
                    src={person}
                    effect='blur'
                    alt='person' />


                <div className="hero_container-text">
                    <h1>Hi, My name is Anthony, i specialize in making websites and webpages amazing, unique and everything in between.</h1>
                    <p>I look forward to working with you.</p>
                    <div className="cta_container flex">
                        <a href="#contact" className="hire">Hire</a>
                        <a href="#works" className="know-more" >Know More</a>

                    </div>
                </div>


            </div>
            <div className='hero_container-socials'>
                <a href="https://github.com/TonyTech-GIT">
                    <img className='icon github' src={GithubIcon} alt="github-icon" />
                </a>

                <a href="https://www.instagram.com/mgbebu_anthony/"><img href="#" className='icon instagram' src={InstagramIcon} alt="instagram-icon" /></a>

                <a href="https://www.linkedin.com/in/anthony-m-aa725b298/">
                    <img className='icon linkedin' src={LinkedInIcon} alt="linkedin-icon" />
                </a>


            </div>
        </section>
    )
}

export default Hero
