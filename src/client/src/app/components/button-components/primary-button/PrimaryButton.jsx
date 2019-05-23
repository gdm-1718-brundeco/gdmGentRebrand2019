import React, { Component } from "react";
import "./PrimaryButton.scss";
import Title from "../../text-components/title/Title";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";

const PrimaryButton = ({ text }) => {
  return (
    <EasyFlexRow style="row-center auto-left-margin primary-button">
      <Title
        style="small-uppercase-title-style"
        text={text}
      />
    </EasyFlexRow>
  );
};

export default PrimaryButton;
