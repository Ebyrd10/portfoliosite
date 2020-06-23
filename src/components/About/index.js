import React, { useState } from 'react'
import './style.css'
import AboutImage from './AboutImage'
import AboutText from './AboutText'

export default function About() {

    const [AboutObj, setAboutObj] = useState({
        image : {
                    src: "./headshot.jpg",
                    alt: 'Ethan Byrd'
                },
                text : {
                    p1: 'hi',
                    p2: 'there'
                }
    });
    return (
        <div className='aboutContainer'>
            <div className='letters'>
                <span>a</span>
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
            </div>
            <div className='aboutMainDisplay'>
                < AboutImage props={AboutObj.image}/>
                < AboutText props={AboutObj.text}/>
            </div>
        </div>
    )
}
