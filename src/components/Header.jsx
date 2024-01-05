import headerLogo from '../../public/assets/dev-t_logo.png'

const Header = () => {

    const handleToggle = () => {
        const menuOpen = document.querySelector("#menuToggle")
        const overlay = document.getElementById("menuOverlay")
        const headerContainer = document.getElementById('header-container')

        if (menuOpen.classList.toggle("show") === true) {
            overlay.style.left = "56%"
            overlay.style.display = "block"

            headerContainer.style.overflowX = 'visible'
            headerContainer.style.overflowY = 'visible'

        } else {
            overlay.style.left = "100%"
            overlay.style.display = "none"
            headerContainer.style.overflowX = 'hidden'
            headerContainer.style.overflowY = 'hidden'

        }

    }
    return (
        <section className="header">
            <div className="header_container flex flex-jc_sb flex-ai_c" id='header-container'>
                {/* <div className="header_container-logo">
                </div> */}

                <img src={headerLogo} alt="logo" />


                <div className="header_container-navLinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>

                <div className="header_container-overlay" id="menuOverlay">

                    <ul>
                        <li><a className='link' href="#home">Home</a></li>
                        <li><a className='link' href="#skills">Skills</a></li>
                        <li><a className='link' href="#works">Works</a></li>
                        <li><a className='link' href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="header_container-menuBtn" id="menuToggle" onClick={handleToggle}>
                    <div className="div1"></div>
                    <div className="div2"></div>
                    <div className="div3"></div>
                </div>

            </div>



        </section>
    )
}

export default Header
