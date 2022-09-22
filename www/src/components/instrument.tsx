import React from "react";

type Props = {
  name: string;
  children?: React.ReactNode;
  onClick: () => void;
};

const Instrument: React.FC<Props> = ({ name, children, onClick }) => {
  return (
    <div className="instrument" onClick={onClick}>
      {name}
      {children}
    </div>
  );
};

export default Instrument;
