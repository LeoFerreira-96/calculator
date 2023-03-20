import React from 'react'
import './Button.css'

export default ({operation, double, triple, label}) => {
    let classes = 'button'
    classes += operation ? ' operation' : ''
    classes += double ? ' double' : ''
    classes += triple ? ' triple' : ''
    return (
        <button
            onClick={(e) => {console.log(e), console.log(operation)}}
            className={classes}>
            {label}
        </button>
    )
}
