import React, { Component } from "react";
import "./TeacherProfile.scss";
import MainImageComponent from "../../image-components/main-image-component/MainImageComponent";
import EasyFlexCol from "../../structural-components/flexbox/easy-flex-col/EasyFlexCol";
import Title from "../../text-components/title/Title";
import Paragraph from "../../text-components/paragraph/Paragraph";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import SecondaryButton from "../../button-components/secondary-button/SecondaryButton";

const Featured = ({ image }) => {
  return (
    <React.Fragment>
      <EasyFlexRow style="row-space-between row-height-lg">
        <EasyFlexCol style="col-prof-img-wrapper">
          <MainImageComponent style="prof-bg-image" />
          <div className="prof-bg-square" />
        </EasyFlexCol>
        <EasyFlexCol style="col-space-between">
          <Title style="prof-card-title" text="Philip De Pauw" />
          <Title
            style="small-uppercase-title-style"
            text="Full stack developer"
          />
          <SecondaryButton text="Meer" />
        </EasyFlexCol>
      </EasyFlexRow>
      <EasyFlexRow style="flex-row row-margin-lg">
        <Paragraph style="team-card-bottomline" />
      </EasyFlexRow>
    </React.Fragment>
  );
};

export default Featured;
