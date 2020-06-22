import React from 'react'

export default function AboutImage(props) {
    return (
        <div className='imageContainer'>
            <img src={props.image.src} alt={props.image.alt} className="aboutImage"/>
        </div>
    )
}
