import React from 'react'
import videoHomePage from '../assets/video-homepage.mp4'

const HomePage = (props) => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop >
                <source
                    src={videoHomePage}
                    type="video/webm" />
            </video>
            <div className="homepage-content">
                <div className='title-form'>
                    Forms <br /> that break <br /> the norm
                </div>
                <div className='title-signup'>
                    Get more data—like signups, feedback, and anything else—with forms designed to be <b>refreshingly different.</b>
                </div>
                <div>
                    <button>Get started—it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage