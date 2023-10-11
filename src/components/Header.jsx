import headerLogo from '../../public/assets/DEV_T-2.png'

const Header = () => {

    const handleToggle = () => {
        const menuOpen = document.querySelector("#menuToggle")
        const overlay = document.getElementById("menuOverlay")

        if (menuOpen.classList.toggle("show") === true) {
            overlay.style.left = "53%"
        } else {
            overlay.style.left = "100%"
        }

    }
    return (
        <section className="header">
            <div className="header_container flex flex-jc_sb flex-ai_c">
                <div className="header_container-logo">
                    <img src={headerLogo} alt="logo" />
                </div>

                <div className="header_container-navLinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>

                <div className="header_container-overlay" id="menuOverlay">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#contact">Contact</a></li>
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
