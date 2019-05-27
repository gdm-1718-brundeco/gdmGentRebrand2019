import React, { Component } from "react";
import "./SwitchArticlesButton.scss";
import Title from "../../text-components/title/Title";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";

const SwitchArticlesButton = ({ text }) => {
  return (
    <EasyFlexRow style="row-center switch-articles-button">
      <Title
        style="small-uppercase-title-style"
        text={text}
      />
    </EasyFlexRow>
  );
};

export default SwitchArticlesButton;
