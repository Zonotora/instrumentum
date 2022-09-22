import React from "react";

type IInstrument = {
  name: string;
  children: React.ReactNode;
  args: any;
  expr: (stdin: string, args: any) => any;
};

export default IInstrument;
