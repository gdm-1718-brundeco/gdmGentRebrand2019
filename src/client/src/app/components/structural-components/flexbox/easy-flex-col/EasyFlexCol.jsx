import React, { Component } from 'react'
import './EasyFlexCol.scss'

const EasyFlexCol = ({ style, children}) => {
    return(
        <div className={style}>{children}</div>
    )
}

export default EasyFlexCol