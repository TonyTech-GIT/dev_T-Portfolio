import speakerOne from '../../public/assets/speaker-1.png'
import spaceTravel from '../../public/assets/space-travel-1.png'
import rating from '../../public/assets/rating-1.png'
import numGuess from '../../public/assets/num-guess-1.png'

const Works = () => {
    return (
        <section className="works" id="works">
            <div className="works_container">
                <h1>Works</h1>

                <div className="works_container-card-wrapper flex">
                    <div className="works_container-card">
                        <div className="works_container-card-inner">
                            <div className="works_container-card-inner-front">
                                <img className='speaker-img' src={speakerOne} alt="speaker" />

                                <h3 className="speaker-text">Speakers Landing Page</h3>
                            </div>
                            <div className="works_container-card-inner-back">
                                <a href="https://devialet-landing-page.netlify.app/">Go to Site</a>
                            </div>
                        </div>

                    </div>

                    <div className="works_container-card">
                        <div className="works_container-card-inner">
                            <div className="works_container-card-inner-front">
                                <img className="spaceTravel-img" src={spaceTravel} alt="space-travel" />

                                <h3 className="spaceTravel-text">Space-Travel Website</h3>
                            </div>
                            <div className="works_container-card-inner-back">
                                <a href="https://space-travel-project101.netlify.app/">Go to Site</a>
                            </div>
                        </div>

                    </div>
                    <div className="works_container-card">
                        <div className="works_container-card-inner">
                            <div className="works_container-card-inner-front">
                                <img className="rating-img" src={rating} alt="feedback-rating" />

                                <h3 className="rating-text">Feedback-Rating</h3>
                            </div>
                            <div className="works_container-card-inner-back">
                                <a href="https://rating-component-frnt-mentor.netlify.app/">Go to Site</a>
                            </div>
                        </div>

                    </div>
                    <div className="works_container-card">
                        <div className="works_container-card-inner">
                            <div className="works_container-card-inner-front">
                                <img className="numGuess-img" src={numGuess} alt="num-guess" />

                                <h3 className='numGuess-text'>Guess the Number</h3>
                            </div>
                            <div className="works_container-card-inner-back">
                                <a href="https://demo-number-guess.netlify.app/">Go to Site</a>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default Works
