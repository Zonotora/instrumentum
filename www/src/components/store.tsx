import React from "react";
import Instrument from "./instrument";
import IInstrument from "../interfaces/instrument";

const instruments: IInstrument[] = [
  {
    name: "1",
    children: <div>1</div>,
    args: { x: 2, y: 1 },
    expr: ({ x, y }) => x + y,
  },
  { name: "2", children: <div>2</div>, args: {}, expr: () => {} },
  { name: "3", children: <div>3</div>, args: {}, expr: () => {} },
  { name: "4", children: <div>4</div>, args: {}, expr: () => {} },
  { name: "5", children: <div>5</div>, args: {}, expr: () => {} },
];

type Props = {
  setInstruments: (instruments: any) => void;
};

const Store: React.FC<Props> = ({ setInstruments }) => {
  const addInstrument = (instrument: IInstrument) => {
    setInstruments((instruments: any) => [...instruments, instrument]);
  };

  return (
    <div className="store">
      {instruments.map((instrument) => (
        <Instrument
          key={instrument.name}
          name={instrument.name}
          onClick={() => addInstrument(instrument)}
        />
      ))}
    </div>
  );
};

export default Store;
