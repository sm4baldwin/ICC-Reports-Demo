import React from 'react'
import './Button.css'

export default function(props) {
    return (
        <div className="button">
            {props.val}
        </div>
    )
}