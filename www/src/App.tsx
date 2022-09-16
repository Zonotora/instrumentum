import { useState } from "react";
import * as wasm from "instrumentum-rs";
import Container from "../components/container";
import Separator from "../components/separator";

type Width = {
  left: number;
  middle: number;
  right: number;
};

const intialWidth = 100 / 3;
const initialState: Width = {
  left: intialWidth,
  middle: intialWidth,
  right: intialWidth,
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
        <div>1</div>
      </Container>
      <Separator />
      <Container width={width.middle}>
        <div>2</div>
      </Container>
      <Separator />
      <Container width={width.right}>
        <div>3</div>
      </Container>
    </div>
  );
};

export default App;
