import { useState, useEffect } from "react";
import * as wasm from "instrumentum-rs";
import Container from "./components/container";
import Separator from "./components/separator";
import Store from "./components/store";
import Recipe from "./components/recipe";
import Io from "./components/io";
import IInstrument from "./interfaces/instrument";

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
  const [instruments, setInstruments] = useState<IInstrument[]>([]);

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
        <Store setInstruments={setInstruments} />
      </Container>
      <Separator />
      <Container width={width.middle}>
        <Recipe instruments={instruments} setInstruments={setInstruments} />
      </Container>
      <Separator />
      <Container width={width.right}>
        <Io />
      </Container>
    </div>
  );
};

export default App;
