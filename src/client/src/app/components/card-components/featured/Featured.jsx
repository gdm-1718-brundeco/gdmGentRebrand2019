import React, { Component } from 'react';
import './Featured.scss'
import StyledSquare from "../../styled-components/square/StyledSquare";
import MainImageComponent from "../../image-components/main-image-component/MainImageComponent";
import EasyFlexCol from "../../structural-components/flexbox/easy-flex-col/EasyFlexCol";
import Title from "../../text-components/title/Title";
import Paragraph from "../../text-components/paragraph/Paragraph";

const Featured = ({image}) => {
    return(
        <div className="featured-wrapper">
            <StyledSquare style="featured-square"/>
            <MainImageComponent style="featured-bg-image" image={image}/>
            <EasyFlexCol style="featured-text-wrapper ">
                <Title style="featured-card-maintitle" text="Did someone say bootcamp"></Title>
                <Paragraph style="standard-text-paragraph" text="Het event werd afgetrapt door een korte voorstelling van de professionals. Hierdoor konden de studenten al een keuze maken qua professionals"/>
            </EasyFlexCol>
        </div>
    )
}

export default Featured