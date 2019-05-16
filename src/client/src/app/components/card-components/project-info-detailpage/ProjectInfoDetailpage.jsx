import React, { Component } from "react";
import "./ProjectInfoDetailpage.scss";
import EasyFlexCol from "../../structural-components/flexbox/easy-flex-col/EasyFlexCol";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import Title from "../../text-components/title/Title";
import Paragraph from "../../text-components/paragraph/Paragraph";
import Lable from "../../text-components/lable";

const Featured = () => {
  return (
    <div className="project-info-detailpage-wrapper">
      <EasyFlexCol style="featured-text-wrapper full-height">
        <EasyFlexRow style="row-flex-start">
          <Title style="text-bold" text="Intern" />
          <Title style="small-left-margin" text="Project" />
        </EasyFlexRow>
        <EasyFlexRow style="row-flex-start medium-bottom-margin">
          <Title style="text-bold" text="24/04/2019" />
          <Title style="small-left-margin" text="Gepubliceerd" />
        </EasyFlexRow>
        <Title style="card-maintitle small-bottom-margin" text="Makers" />
        <Title style="primary-color" text="Victor Gouhie" />
        <Title
          style="primary-color medium-bottom-margin"
          text="Audiovisual design"
        />
        <Title style="card-maintitle small-bottom-margin" text="Omschrijving" />
        <Paragraph
          style="standard-text-paragraph"
          text="De briefing van deze opdracht voor het vak '2D Animatie' luidde als volgt: maak een one minute video door gebruik te maken van ‘Vormator’ elementen."
        />
        <Lable text="2D Animatie" style="primary-lable medium-top-margin"/>
      </EasyFlexCol>
    </div>
  );
};

export default Featured;
