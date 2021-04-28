import React, { FC } from "react";
import { TerminalText } from "../../components/TerminalText/TerminalText";
import { useDisplayBlock } from "../../hooks/useDisplayBlock";

export const RootPage: FC = () => {
  const { displayBlock, displayNextBlock } = useDisplayBlock(["hello", "name", "descrip"]);

  return (
    <div>
      {displayBlock.hello.display && (
        <TerminalText
          autotype
          showCursor={displayBlock.hello.showCursor}
          onAutotypeComplete={() => {
            displayNextBlock("hello", "name", 1500);
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
            displayNextBlock("name", "descrip", 1000);
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
