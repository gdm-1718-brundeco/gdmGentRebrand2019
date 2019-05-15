import React, { Component } from 'react';
import './Paragraph.scss'

const Paragraph = ({text, style}) => {
    return(
        <p className={style}>{text}</p>
    )
}

export default Paragraph