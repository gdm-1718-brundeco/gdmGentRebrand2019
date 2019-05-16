import React, { Component } from 'react';
import './EventBlockHeader.scss'
import Title from '../../text-components/title/Title'
import Link from '../../text-components/link/Link'

class EventBlockHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="event-block-container">
                <Title text="22 Juni - 3D modelling" style="event-block-maintitle"/>
                <p>Het event word afgetrapt door een korte voorstelling van de professionals.</p>
                <Link style="hea"/>
            </div>
         );
    }
}
 
export default EventBlockHeader;