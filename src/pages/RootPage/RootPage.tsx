import React, { FC, useState } from "react";
import { TerminalText } from "../../components/TerminalText/TerminalText";

type BlockNames = "hello" | "name" | "descrip";

export const RootPage: FC = () => {
  const [displayBlock, setDisplayBlock] = useState<Record<BlockNames, boolean>>({
    hello: true,
    name: false,
    descrip: false,
  });

  const displayNextBlock = (blockName: BlockNames) => {
    setTimeout(() => {
      setDisplayBlock({ ...displayBlock, [blockName]: true });
    }, 500);
  };

  return (
    <div>
      {displayBlock.hello && (
        <TerminalText
          autotype
          onAutotypeComplete={() => {
            displayNextBlock("name");
          }}
        >
          Hello. Hi. :)
        </TerminalText>
      )}
      {displayBlock.name && (
        <TerminalText
          autotype
          onAutotypeComplete={() => {
            displayNextBlock("descrip");
          }}
        >
          My name is Ryan Workman. I am a full-stack software engineer and enjoy building fun things that make me smile.
        </TerminalText>
      )}
      {displayBlock.descrip && (
        <TerminalText autotype>
          You can check out some of the things I've built and contributed to over at GitHub 🙂
        </TerminalText>
      )}
    </div>
  );
};
