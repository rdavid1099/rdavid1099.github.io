import React, { FC, useEffect, useState } from "react";
import { TerminalTextStyles } from "./TerminalText.style";

interface TerminalTextProps {
  autotype?: boolean;
  autotypeSpeed?: "slow" | "medium" | "fast";
  showCursor?: boolean;
  children: string;
  onAutotypeComplete?: () => void;
}

enum AutotypeSpeed {
  "slow" = 100,
  "medium" = 50,
  "fast" = 30,
}

export const TerminalText: FC<TerminalTextProps> = ({
  autotype,
  autotypeSpeed,
  children,
  showCursor,
  onAutotypeComplete,
}) => {
  const [displayText, setDisplayText] = useState<string>(autotype ? "" : children);

  useEffect(() => {
    if (autotype) {
      let text = "";
      const chars = children.split("");
      chars.forEach((char, index) => {
        setTimeout(() => {
          text = `${text}${char}`;
          setDisplayText(text);
          if (index === chars.length - 1 && onAutotypeComplete) {
            onAutotypeComplete();
          }
        }, index * AutotypeSpeed[autotypeSpeed ?? "medium"]);
      });
    }
  }, [autotype, children, setDisplayText, autotypeSpeed]);

  return (
    <div style={TerminalTextStyles.rootContainer}>
      <p style={TerminalTextStyles.carrot}>{">"}</p>
      <p>{displayText}</p>
      {showCursor && <div style={{ height: "22px", width: "10px", backgroundColor: "green", marginLeft: "4px" }} />}
    </div>
  );
};
