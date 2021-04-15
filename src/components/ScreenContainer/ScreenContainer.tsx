import React, { FC } from "react";
import { ScreenContainerStyles } from "./ScreenContainer.style";
import { useAppState } from "../../hooks/useAppState";

export const ScreenContainer: FC = ({ children }) => {
  const { state } = useAppState();

  return (
    <div style={state.screenOn ? ScreenContainerStyles.screenOn : ScreenContainerStyles.screenOff}>
      <div style={ScreenContainerStyles.viewport}>{state.screenOn && children}</div>
    </div>
  );
};
