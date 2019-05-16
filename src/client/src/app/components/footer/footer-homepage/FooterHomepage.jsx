import React, { Component } from "react";
import "./FooterHomepage.scss";
import EasyFlexCol from "../../structural-components/flexbox/easy-flex-col/EasyFlexCol";
import EasyFlexRow from "../../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import Title from "../../text-components/title/Title";
import Link from "../../text-components/link/Link";
import Paragraph from "../../text-components/paragraph/Paragraph";
import StyledSquare from "../../styled-components/square/StyledSquare";

const FooterHomepage = () => {
  return (
    <EasyFlexCol style="footer-wrapper">
      <EasyFlexRow style="row-space-between">
        <EasyFlexCol style="col-space-between">
          <Title text="Alles over gdm" style="footer-section-title" />
          <Link text="In de kijker" />
          <Link text="Team" />
          <Link text="Getuigenissen" />
          <Link text="Projecten" />
          <Link text="Contact" />
        </EasyFlexCol>
        <EasyFlexCol style="col-space-between">
          <Link text="Onze opleiding" />
          <Link text="Iets voor jou" />
          <Link text="Welke vakken krijg je" />
          <Link text="Naar het buitenland" />
          <Link text="Onze aanpak" />
        </EasyFlexCol>
        <EasyFlexCol style="col-space-between">
          <Link text="Campus Mariakerke" />
          <Link text="Trajecten op maat" />
          <Link text="Gdm.gent" />
          <Link text="Wat na je opleiding" />
          <Link text="Stage en bachelorproef" />
        </EasyFlexCol>
        <EasyFlexCol style="col-space-between">
          <Link text="Stories" />
          <Link text="Brochure" />
          <Link text="Showcase" />
          <Link text="In de kijker" />
        </EasyFlexCol>
      </EasyFlexRow>
      <EasyFlexRow style="row-space-between">
        <EasyFlexCol style="col-space-between">
          <Title text="Contact" style="footer-section-title" />
          <Paragraph text="Industrieweg 232, 9090 Mariakerke" />
          <Paragraph text="+32 9 234 86 00" />
          <Paragraph text="Info.grafische.digitalemedia@arteveldehs.be" />
        </EasyFlexCol>
        <EasyFlexCol style="col-space-between">
          <Title text="Social" style="footer-section-title" />
          <EasyFlexRow style="row-space-between align-items-center">
            <Link style="social-icon-base social-icon-twit left-right-margin" />
            <Link style="social-icon-base social-icon-face left-right-margin" />
            <Link style="social-icon-base social-icon-inst left-right-margin" />
            <Link style="social-icon-base social-icon-gith left-right-margin" />
            <Link style="social-icon-base social-icon-vime left-right-margin" />
          </EasyFlexRow>
        </EasyFlexCol>
      </EasyFlexRow>
      <StyledSquare style="footer-bottom-decoration" />
    </EasyFlexCol>
  );
};

export default FooterHomepage;
