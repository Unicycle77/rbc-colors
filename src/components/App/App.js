import React, { Component } from "react";
import Palette from "../Palette/Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "../../colorHelper";

class App extends Component {
  render() {
    console.log(generatePalette(seedPalettes[4]));
    return (
      <div>
        <Palette {...seedPalettes[4]} />
      </div>
    );
  }
}

export default App;
