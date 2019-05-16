import React, { Component } from "react";
import "./Lable.scss";

const Lable = ({ text, style }) => {
  return <p className={style}>{text}</p>;
};

export default Lable;
