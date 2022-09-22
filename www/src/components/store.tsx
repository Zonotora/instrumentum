import React from "react";
import Instrument from "./instrument";

const instruments = ["1", "2", "3", "4"];

type Props = {
  setInstruments: (instruments: any) => void;
};

const Store: React.FC<Props> = ({ setInstruments }) => {
  const addInstrument = (instrument: any) => {
    setInstruments((instruments: any) => [...instruments, instrument]);
  };

  return (
    <div className="store">
      {instruments.map((instrument) => (
        <Instrument
          key={instrument}
          name={instrument}
          onClick={() => addInstrument(instrument)}
        />
      ))}
    </div>
  );
};

export default Store;
