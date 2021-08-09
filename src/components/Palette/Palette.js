import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.css";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox key={color.color} background={color.color} name={color.name} />
    ))
    return (
      <div>
        <div className="Palette">
          {/* Navbar goes here */}
          <div className="Palette-colors">
            {/* bunch of color boxes */}
            {colorBoxes}
          </div>
          {/* Footer goes here*/}
        </div>
      </div>
    );
  }
}
