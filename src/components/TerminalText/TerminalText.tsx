import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
  console.log("redrawing");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autotype, children, setDisplayText, autotypeSpeed]);
  console.log(displayText);
  console.log(children);
  return (
    <div style={TerminalTextStyles.rootContainer}>
      <Helmet>
        <link rel="stylesheet" href="/stylesheets/components/TerminalText.css" />
      </Helmet>
      <p style={TerminalTextStyles.carrot}>{">"}</p>
      <p>
        {children}
        {showCursor && <div className="TerminalText__cursor" style={TerminalTextStyles.cursor} />}
      </p>
    </div>
  );
};
