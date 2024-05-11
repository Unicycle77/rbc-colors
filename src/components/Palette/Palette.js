import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    }
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({level})
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    
    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.id} background={color.hex} name={color.name} />
    ))
    return (
      <div>
        <div className="Palette">
          {/* Navbar goes here */}
          <Navbar level={level} changeLevel={this.changeLevel}/>
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

export default Palette;
