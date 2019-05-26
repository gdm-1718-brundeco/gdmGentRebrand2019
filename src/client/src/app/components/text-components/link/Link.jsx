import React, { Component } from "react";
import "./Link.scss";

const Link = ({ style, text, handleClick }) => (
  <a className={style} onClick={handleClick}>
    {text}
  </a>
);

export default Link;
