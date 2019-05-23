import React, { Component } from "react";
import "./SecondaryButton.scss";
import Title from "../../text-components/title/Title";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";

const Featured = ({ text }) => {
  return (
    <EasyFlexRow style="row-center secondary-button">
      <Title
        style="small-uppercase-title-style"
        text={text}
      />
    </EasyFlexRow>
  );
};

export default Featured;
