import React, { Component } from "react";
import "./PrimaryButton.scss";
import Title from "../../text-components/title/Title";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";

const PrimaryButton = ({ text, path }) => {
  return (
    <EasyFlexRow style="row-center primary-button">
      <Title
        style="small-uppercase-title-style"
        text={text}
        href={path}
      />
    </EasyFlexRow>
  );
};

export default PrimaryButton;
