/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import PostsListPaged from "../../components/posts-list-paged";
import GeneralNav from "../../components/header/general-nav/GeneralNav";
import GridWrapper from "../../components/structural-components/grid-wrapper/GridWrapper";
import Footer from "../../components/footer";
import BlankDiv from "../../components/styled-components/blank-div/BlankDiv";
import Title from "../../components/text-components/title/Title";
import Overlay from "../../components/styled-components/overlay/Overlay";
import OverlayMenu from "../../components/structural-components/overlay-menu/OverlayMenu";
import HeaderFullscreen from "../../components/header/header-fullscreen/HeaderFullscreen";
import Paragraph from "../../components/text-components/paragraph/Paragraph";
import Quote from "../../components/text-components/quote";
import Featured from "../../components/card-components/featured/Featured";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import PrimaryButton from "../../components/button-components/primary-button/PrimaryButton";
import EasyFlexRow from "../../components/structural-components/flexbox/easy-flex-row/EasyFlexRow";

class EventsPage extends Component {
    state = {
        events: [],
        pagination: {
          limit: 5,
          page: 1,
          pages: 1,
          total: 1
        }
      };

    componentWillMount() {
        this.loeadEvents(this.props.match.params.id);
    }
    loeadEvents = pageIndex => {
    console.log(pageIndex);
    Api.findAllEvents({ limit: 3, skip: pageIndex })
        .then(data => {
        console.log(data.docs)
        const prevElements = this.state.events;
        const newElements = [...prevElements, ...data.docs];
        this.setState(prevState => ({
            ...prevState,
            events: newElements,
            pagination: {
            limit: data.limit,
            page: data.page,
            pages: data.pages,
            total: data.total
            }
        }));
        })
        .catch(error => {
        console.log(error);
        });
      };
      goToProjectDetailPage = id => {
        this.props.history.push(`/events/${id}`);
      };
    
      toggleMenu = e => {
        e.preventDefault();
        this.setState(state => ({ showMenu: !state.showMenu }));
      };
    
      getParentState = e => {
        let parentState = this.state.showMenu
        return(parentState)
      }
    render() {
        const { pagination, events } = this.state;
        this.items = this.state.events.map( (item,key) =>
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.synopsis}</p>
          <p></p>
          <br></br>
          <a href={'/events/' + item.id}> Detail</a>
        </div>
        );
        return (
            <React.Fragment>
            <Title style="section-title" text="Events" />
            {this.items}
        </React.Fragment>
        )
    }
}

export default (EventsPage);