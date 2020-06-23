import React from 'react'
import './style.css'

export default function AboutImage({src, alt}) {
    return (
        <div className='imageContainer'>
            <img src='./headshot.jpg' alt='Ethan Byrd' className="aboutImage"/>
        </div>
    )
}
