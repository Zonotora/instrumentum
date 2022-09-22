import React from "react";

type Props = {
  name: string;
  onClick: () => void;
};

const Instrument: React.FC<Props> = ({ name, onClick }) => {
  return (
    <div className="instrument" onClick={onClick}>
      {name}
    </div>
  );
};

export default Instrument;
