import React from "react";
import Draggable from "./draggable";

const instruments = ["1", "2", "3", "4"];

type Props = {};

const Instruments: React.FC<Props> = () => {
  return (
    <div className="instruments">
      {instruments.map((instrument) => (
        <Draggable name={instrument} />
      ))}
    </div>
  );
};

export default Instruments;
