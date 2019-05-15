import React, { Component } from 'react';
import './Title.scss'

const Title = ({text, style}) => {
    return(
        <p className={style}>{text}</p>
    )
}

export default Title