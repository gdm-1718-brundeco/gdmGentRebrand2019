import React, { Component } from "react";
import "./Footer.scss";
import EasyFlexCol from "../structural-components/flexbox/easy-flex-col/EasyFlexCol";
import EasyFlexRow from "../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import Link from "../text-components/link/Link";
import Title from "../text-components/title/Title";
import Paragraph from "../text-components/paragraph/Paragraph";

const Footer = () => {
  return (
    <EasyFlexCol style="col-medium-height">
      <EasyFlexRow style="row-space-between row-margin-sm row-width-md">
        <Link text="Getuigenissen" style="footer-link"/>
        <Link text="Events" style="footer-link"/>
        <Link text="Nieuws" style="footer-link"/>
        <Link text="Diensten" style="footer-link"/>
        <Link text="Contact" style="footer-link"/>
        <Link text="Team" style="footer-link"/>
        <Link text="Work" style="footer-link"/>
      </EasyFlexRow>
      <EasyFlexRow style="row-space-between row-margin-sm row-width-xsm">
        <Link text="Facebook" style="color-lightgrey footer-link"/>
        <Link text="Github" style="color-lightgrey footer-link"/>
        <Link text="Instagram" style="color-lightgrey footer-link"/>
        <Link text="Vimeo" style="color-lightgrey footer-link"/>
        <Link text="Twitter" style="color-lightgrey footer-link"/>
      </EasyFlexRow>
      <EasyFlexRow style="row-space-between row-margin-sm">
        <Title style="paragraph-bottomline" />
      </EasyFlexRow>
      <Paragraph text="© 2019 Arteveldehogeschool, all right reserved" style="color-lightgrey"/>
      <EasyFlexRow />
    </EasyFlexCol>
  );
};

export default Footer;
