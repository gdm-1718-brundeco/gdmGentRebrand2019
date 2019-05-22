import React, { Component, StyleSheet } from "react";
import "./Overlay.scss";

const Overlay = ({ style, children }) => {
  return <div className={style}>{children}</div>;
};

export default Overlay;
