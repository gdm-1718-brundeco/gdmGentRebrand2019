import React, { Component, StyleSheet } from "react";
import "./Parallax.scss";

const Parallax = ({ style, children }) => {
  return <div className={style}>{children}</div>;
};



export default Parallax;
