import React from 'react'
import fb from "../image/facebook.png"
import Ins from "../image/instro.png"
import "../style/footer.css"
function Footer() {
  return (
    <div className='footer'>

        <div className='logo'><span>Logo</span></div>
        <div className='submenu'>
                <ul>
                    <li>Home</li>
                    <li>Book</li>
                    <li>Videos</li>
                    <li>Audios</li>
                    <li>Quizzes & Exerces</li>
                </ul>


        </div>
        <div className='icons'>
            <img src={fb} alt="facebook" />
            <img src={Ins} alt="instrogram" />
        </div>
    </div>
  )
}

export default Footer;