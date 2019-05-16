import React, { Component } from "react";
import './Link.scss'

const Link = ({ style, text}) => <a className={style}>{text}</a>;

export default Link;
