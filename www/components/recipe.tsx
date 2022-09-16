import React from "react";
import Draggable from "./draggable";

const instruments = ["1", "2", "3", "4"];

type Props = {};

const Recipe: React.FC<Props> = () => {
  return (
    <div className="recipe">
      {instruments.map((instrument) => (
        <Draggable name={instrument} />
      ))}
    </div>
  );
};

export default Recipe;
