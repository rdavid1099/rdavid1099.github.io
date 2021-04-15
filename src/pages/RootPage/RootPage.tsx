import React, { FC, useState } from "react";
import { TerminalText } from "../../components/TerminalText/TerminalText";

type BlockNames = "hello" | "name" | "descrip";

export const RootPage: FC = () => {
  const [displayBlock, setDisplayBlock] = useState<Record<BlockNames, Record<"display" | "showCursor", boolean>>>({
    hello: { display: true, showCursor: true },
    name: { display: false, showCursor: true },
    descrip: { display: false, showCursor: true },
  });

  const displayNextBlock = (currentBlockName: BlockNames, nextBlockName: BlockNames) => {
    setTimeout((): void => {
      setDisplayBlock({
        ...displayBlock,
        [currentBlockName]: { display: true, showCursor: false },
        [nextBlockName]: { display: true, showCursor: true },
      });
    }, 1200);
  };
  console.log(displayBlock);
  return (
    <div>
      {displayBlock.hello.display && (
        <TerminalText
          autotype
          showCursor={displayBlock.hello.showCursor}
          onAutotypeComplete={() => {
            displayNextBlock("hello", "name");
          }}
        >
          Hello. Hi. :)
        </TerminalText>
      )}
      {displayBlock.name.display && (
        <TerminalText
          autotype
          showCursor={displayBlock.name.showCursor}
          onAutotypeComplete={() => {
            displayNextBlock("name", "descrip");
          }}
        >
          My name is Ryan Workman. I am a software engineer based out of Denver, Colorado and enjoy building fun things
          that make me smile.
        </TerminalText>
      )}
      {displayBlock.descrip.display && (
        <TerminalText autotype showCursor={displayBlock.descrip.showCursor}>
          Feel free to click around and check out what I've been up to and some of my past projects.
        </TerminalText>
      )}
    </div>
  );
};
