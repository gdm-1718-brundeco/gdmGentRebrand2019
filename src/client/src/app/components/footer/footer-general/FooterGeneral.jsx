import React, { Component } from 'react'
import './FooterGeneral.scss'
import EasyFlexCol from '../../structural-components/flexbox/easy-flex-col/EasyFlexCol';
import EasyFlexRow from '../../structural-components/flexbox/easy-flex-row/EasyFlexRow';
import Link from '../../text-components/link/Link';

const FooterGeneral = () => {
    return(
        <EasyFlexCol style="col-space-between medium-height">
            <EasyFlexRow style="row-center">
                <Link text="Home" style="left-right-margin"/>
                <Link text="In de kijker" style="left-right-margin"/>
                <Link text="Arteveldehogeschool" style="left-right-margin"/>
                <Link text="Made by gdm" style="left-right-margin"/>
                <Link text="Opendeurdag" style="left-right-margin"/>
                <Link text="Externe projecten" style="left-right-margin"/>
            </EasyFlexRow>
            <EasyFlexRow style="row-center medium-top-margin">
                <Link style="social-icon-base social-icon-twit left-right-margin"/>
                <Link style="social-icon-base social-icon-face left-right-margin"/>
                <Link style="social-icon-base social-icon-inst left-right-margin"/>
                <Link style="social-icon-base social-icon-gith left-right-margin"/>
                <Link style="social-icon-base social-icon-vime left-right-margin"/>
            </EasyFlexRow>
        </EasyFlexCol>
    )
}

export default FooterGeneral;