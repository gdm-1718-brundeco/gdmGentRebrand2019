import React, { Component } from 'react';
import '../../image-components/main-image-component/MainImageComponent'
import Title from '../../text-components/title/Title';
import EasyFlexRow from '../../structural-components/flexbox/easy-flex-row/EasyFlexRow';
import './GeneralNav.scss'

class GeneralNav extends Component {
    state = {  }
    render() { 
        return ( 
            <EasyFlexRow style="row-space-between header-nav-justify-content nav-height">
                <Title text="arteveldehogeschool" style="small-uppercase-title-style bl small-uppercase-title-pos-3"/>
                <div className="nav-burger-box">
                    <div className="nav-burger-top"></div>
                    <div className="nav-burger-bottom"></div>
                </div>
            </EasyFlexRow>
         );
    }
}
 
export default GeneralNav;

