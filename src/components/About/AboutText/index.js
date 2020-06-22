import React from 'react'

export default function AboutText(props) {
    return (
        <div className='aboutTextContainer'>
            <div className='aboutP1'>
                {props.about.p1}
            </div>
            <div className='aboutP2'>
                {props.about.p2}
            </div>
        </div>
    )
}
