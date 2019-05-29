import React, { Component } from "react";
import "./Featured.scss";
import MainImageComponent from "../../image-components/main-image-component/MainImageComponent";
import EasyFlexCol from "../../structural-components/flexbox/easy-flex-col/EasyFlexCol";
import Title from "../../text-components/title/Title";
import Paragraph from "../../text-components/paragraph/Paragraph";

const Featured = ({ image, path }) => {
  return (
    <div className="featured-wrapper">
      <EasyFlexCol style="col-space-between col-card-width-1 ">
        <EasyFlexCol style="col-space-between col-card-width-full">
          <Title text="Thrive" style="small-uppercase-title-style card-title-pos bl" />
          <MainImageComponent style="card-bg-image card-image-pos" href={path}/>
          <Paragraph
            text="Een overzicht van onze specifieke diensten vindt u hier"
            style="standard-text-paragraph card-text-pos"
          />
        </EasyFlexCol>
      </EasyFlexCol>
    </div>
  );
};

export default Featured;
