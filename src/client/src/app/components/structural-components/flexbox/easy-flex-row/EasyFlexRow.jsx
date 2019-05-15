import React, { Component } from 'react'
import './EasyFlexRow.scss'

const EasyFlexRow = ({ style, children}) => {
    return(
        <div className={style}>{children}</div>
    )
}

export default EasyFlexRow