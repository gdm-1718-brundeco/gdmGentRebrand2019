import React, { Component } from "react";
import './Link.scss'

const Link = ({ text, id, style }) => <a id={id} className={style}>{text}</a>;

export default Link;
