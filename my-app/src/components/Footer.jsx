import React from 'react'
import '../App.css'

const Footer = () => {
    const scrollToTop=()=>{
        window.scrollTo({top:0, behavior:'smooth'})
    }
  return (
    <div>
      <footer className ='footer'>
         <div className="footer-container">
            <div className="footer-content">
                <button onClick={scrollToTop} className='btn-footer'>Back to top</button>
                <p className='footer-text'>copyright and copy; 2025. All rights reserved</p>
            </div>
            <div className="footer-links">
                <a href=''>FaceBook</a>
                <a href=''>Twitter</a>
                <a href=''>Github</a>

            </div>
         </div>
      </footer>
    </div>
  )
}

export default Footer
