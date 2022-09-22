import React from "react";
import Instrument from "./instrument";

type Props = {
  instruments: any[];
  setInstruments: (instruments: any) => void;
};

const Recipe: React.FC<Props> = ({ instruments, setInstruments }) => {
  const removeInstrument = (index: number) => {
    setInstruments((instruments: any) => {
      return instruments.filter((e: any, i: number) => i != index);
    });
  };

  return (
    <div className="recipe">
      {instruments.map((instrument, index) => (
        <Instrument
          key={index}
          name={instrument.name}
          onClick={() => removeInstrument(index)}
        >
          {instrument.children}
        </Instrument>
      ))}
    </div>
  );
};

export default Recipe;
