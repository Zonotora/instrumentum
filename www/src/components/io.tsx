import React, { useState } from "react";
import IInstrument from "../interfaces/instrument";
import Separator from "../components/separator";

type Props = {
  instruments: IInstrument[];
};

const Io: React.FC<Props> = ({ instruments }) => {
  const [input, setInput] = useState<string>("");

  const output = () => {
    if (instruments.length === 0) return "";

    try {
      let stdin = input;
      for (const instrument of instruments) {
        stdin = instrument.expr(stdin, instrument.args);
      }
      return stdin;
    } catch (e: any) {
      return "Invalid format";
    }
  };

  return (
    <div className="io">
      <textarea
        spellCheck={false}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <Separator horizontal />
      <div className="output">{output()}</div>
    </div>
  );
};

export default Io;
