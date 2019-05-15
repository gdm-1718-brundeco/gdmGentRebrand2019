import React, { Component, StyleSheet } from 'react';
import './GridWrapper.scss'

class GridWrapper extends Component {
    render() { 
        return ( 
            <div className="grid-wrapper">
                {this.props.children}
            </div>
         );
    }
}
 
export default GridWrapper;