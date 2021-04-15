import React, { FC } from "react";
import { AppContainerStyles } from "./AppContainer.style";

export const AppContainer: FC = ({ children }) => {
  return <div style={AppContainerStyles.mainContainer}>{children}</div>;
};
