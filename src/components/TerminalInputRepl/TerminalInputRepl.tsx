import React, { FC, useState, useEffect } from "react";
import { TerminalText } from "../TerminalText/TerminalText";

export const TerminalInputRepl: FC = () => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: KeyboardEvent) => {
    setInput(`${input}${event.key}`);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleInputChange);

    return () => {
      document.removeEventListener("keydown", handleInputChange);
    };
  }, [handleInputChange]);
  console.log(input);
  return <TerminalText showCursor>{input}</TerminalText>;
};
