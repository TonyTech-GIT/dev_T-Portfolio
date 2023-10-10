import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md'
const Footer = () => {
    return (
        <section className="footer" id='contact'>
            <div className="footer_container flex">
                <div className="footer_container-img">
                    <img src="../../assets/DEV_T-2.png" alt="logo" />
                </div>
                <div className="footer_container-contact flex">
                    <span className='flex '>
                        <MdPhone className='icons' /> <p>08157732519</p>
                    </span>
                    <span className='flex flex_ai-c'>
                        <MdEmail className='icons' />  <p>devtony007@gmail.com</p>
                    </span>
                    <span className='flex flex_ai-c'>
                        <MdWhatsapp className='icons' />  <p>08157732519</p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Footer
