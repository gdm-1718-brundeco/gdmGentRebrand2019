import React, { Component } from 'react';
import './MainImageComponent.scss'

const MainImageComponent = ({text, style, children}) => {
    return(
        <div className={style}>{children}</div>
    )
}

export default MainImageComponent