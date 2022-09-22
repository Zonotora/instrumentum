import React from "react";
import Instrument from "./instrument";
import IInstrument from "../interfaces/instrument";

const instruments: IInstrument[] = [
  {
    name: "Addition",
    children: <div></div>,
    args: { constant: 3 },
    expr: (stdin, { constant }) => parseInt(stdin) + constant,
  },
  {
    name: "Mulitplication",
    children: <div></div>,
    args: { constant: 3 },
    expr: (stdin, { constant }) => parseInt(stdin) * constant,
  },
  {
    name: "Power",
    children: <div></div>,
    args: { constant: 3 },
    expr: (stdin, { constant }) => parseInt(stdin) ** constant,
  },
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
