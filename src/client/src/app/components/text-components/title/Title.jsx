import React, { Component } from "react";
import "./Title.scss";

// const Title = ({ text, style, props }) => {
//   return <p className={style} onClick={props.handleClick}>{text}</p>;
// };

class Title extends Component {
  state = { 
    text: this.props.text,
    style: this.props.style,
   }
  render() { 
    return ( 
      <p className={this.state.style} onClick={this.props.handleClick}>{this.state.text}</p>
     );
  }
}
 
export default Title;