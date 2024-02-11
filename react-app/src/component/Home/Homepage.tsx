import React from 'react'
import videoHopepage from '../../assets/video-homepage.mp4'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source
                    src={videoHopepage}
                    type='video/mp4'
                />
            </video>
        </div>
    )
}

export default HomePage