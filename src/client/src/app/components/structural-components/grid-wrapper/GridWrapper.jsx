import React, { Component, StyleSheet } from 'react';
import './GridWrapper.scss'

const GridWrapper = ({ style, children }) => {
    return <div className={style}>{children}</div>;
  };
  
 
export default GridWrapper;