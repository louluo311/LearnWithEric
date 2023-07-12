import React from 'react'
import videoHomePage from '../assets/video-homepage.mp4'

const HomePage = (props) => {
    return (
        <div className='homepage-container'>Home Page container
            <video autoPlay muted loop >
                <source
                    src={videoHomePage}
                    type="video/webm" />
            </video>
        </div>
    )
}

export default HomePage