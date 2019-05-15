import React, { Component } from 'react'
import './EasyFlexGrid.scss'

const EasyFlexGrid = ({ style, children}) => {
    return(
        <div className={style}>{children}</div>
    )
}

export default EasyFlexGrid