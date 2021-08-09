import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    let styles = {
      background: background,
    };
    return (
      <div className="ColorBox" style={{ ...styles }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    );
  }
}
