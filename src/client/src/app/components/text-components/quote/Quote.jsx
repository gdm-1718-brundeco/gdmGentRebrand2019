import React, { Component } from 'react';
import './Quote.scss'

const Quote = ({text, style}) => {
    return(
        <p className={style}>{text}</p>
    )
}

export default Quote