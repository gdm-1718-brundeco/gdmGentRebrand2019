import React, { Component } from "react";
import "./Footer.scss";
import EasyFlexCol from "../structural-components/flexbox/easy-flex-col/EasyFlexCol";
import EasyFlexRow from "../structural-components/flexbox/easy-flex-row/EasyFlexRow";
import Title from "../text-components/title/Title";
import Paragraph from "../text-components/paragraph/Paragraph";

const Footer = () => {
  return (
    <EasyFlexCol style="col-medium-height">
      <EasyFlexRow style="row-space-between row-margin-sm row-width-md">
        <a href="/testimonials" className="footer-link">Getuigenissen</a>
        <a href="/events" className="footer-link">Events</a>
        <a href="/news" className="footer-link">Nieuws</a>
        <a href="/services" className="footer-link">Diensten</a>
        <a href="/contact" className="footer-link">Contact</a>
        <a href="/team" className="footer-link">Team</a>
        <a href="/projects" className="footer-link">Work</a>
      </EasyFlexRow>
      <EasyFlexRow style="row-space-between row-margin-sm row-width-xsm">
        <a href="https://www.facebook.com/GrafischeendigitalemediaArteveldehogeschool/" target='_blank' className="color-lightgrey footer-link">Facebook</a>
        <a href="https://github.com/gdmgent" target='_blank' className="color-lightgrey footer-link">Github</a>
        <a href="https://www.instagram.com/madebygdm/" target='_blank' className="color-lightgrey footer-link">Instagram</a>
        <a href="https://vimeo.com/bachelorgdm" target='_blank' className="color-lightgrey footer-link">Vimeo</a>
        <a href="https://twitter.com/arteveldegdm" target='_blank' className="color-lightgrey footer-link">Twitter</a>
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
