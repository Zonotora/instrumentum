import { useState } from "react";
import * as wasm from "instrumentum-rs";
import Container from "../components/container";
import Separator from "../components/separator";
import Instruments from "../components/instruments";
import Recipe from "../components/recipe";

type Width = {
  left: number;
  middle: number;
  right: number;
};

const initialState: Width = {
  left: 100 / 5,
  middle: (100 * 2) / 5,
  right: (100 * 2) / 5,
};

const App = () => {
  const [width, setWidth] = useState(initialState);

  const adjustLeft = () => {
    setWidth((state) => {
      return {
        ...state,
      };
    });
  };

  return (
    <div className="main">
      <Container width={width.left}>
        <Instruments />
      </Container>
      <Separator />
      <Container width={width.middle}>
        <Recipe />
      </Container>
      <Separator />
      <Container width={width.right}>
        <div>3</div>
      </Container>
    </div>
  );
};

export default App;
