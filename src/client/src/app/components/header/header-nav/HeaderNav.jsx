import React, { Component } from 'react';
import '../../image-components/main-image-component/MainImageComponent'
import Title from '../../text-components/title/Title';
import EasyFlexRow from '../../structural-components/flexbox/easy-flex-row/EasyFlexRow';
import './HeaderNav.scss'

class HeaderNav extends Component {
    state = {  }
    render() { 
        return ( 
            <EasyFlexRow style="row-space-between header-nav-justify-content">
                {/* <Title text="arteveldehogeschool" style="small-uppercase-title-style wh small-uppercase-title-pos-3"/> */}
                <div className="nav-burger-box">
                    <div className="nav-burger-top-wh"></div>
                    <div className="nav-burger-bottom-wh"></div>
                </div>
            </EasyFlexRow>
         );
    }
}
 
export default HeaderNav;

