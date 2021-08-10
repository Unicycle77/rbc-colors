import React, { Component } from "react";
import Palette from "../Palette/Palette";
import seedPalettes from "./seedPalettes";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedPalettes[4]} />
      </div>
    );
  }
}

export default App;
