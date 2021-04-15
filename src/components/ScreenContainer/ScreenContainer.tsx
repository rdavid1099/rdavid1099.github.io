import React, { FC } from "react";
import { ScreenContainerStyles } from "./ScreenContainer.style";

export const ScreenContainer: FC = ({ children }) => {
  return (
    <div style={ScreenContainerStyles.root}>
      <div style={ScreenContainerStyles.viewport}>{children}</div>
    </div>
  );
};
