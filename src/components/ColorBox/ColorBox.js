import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    let styles = {
      background: this.props.background
    }
    return (
      <div className="ColorBox" style={{...styles}}>
        <span>{this.props.name}</span>
      </div>
    );
  }
}
