import { useState } from "react";

export function useDisplayBlock(blockNames: string[]) {
  type BlockNames = typeof blockNames[number];
  type DisplayBlockType = Record<BlockNames, Record<"display" | "showCursor", boolean>>;

  const initialState: DisplayBlockType = blockNames.reduce((result, blockName, index) => {
    return { ...result, [blockName]: { display: index === 0, showCursor: index === 0 } };
  }, {});

  const [displayBlock, setDisplayBlock] = useState<DisplayBlockType>(initialState);

  const displayNextBlock = (currentBlockName: BlockNames, nextBlockName: BlockNames, delay: number = 1200) => {
    setTimeout((): void => {
      setDisplayBlock({
        ...displayBlock,
        [currentBlockName]: { display: true, showCursor: false },
        [nextBlockName]: { display: true, showCursor: true },
      });
    }, delay);
  };

  return { displayBlock, displayNextBlock };
}
