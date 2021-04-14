import React, { FC, createContext, useState, useCallback } from "react";

export interface AppStateType {
  welcomeText?: string;
}

export interface AppStateProviderContext {
  state: AppStateType;
  updateState(content: AppStateType): void;
}

export const AppStateContext = createContext<AppStateProviderContext>({
  state: {},
  updateState: () => (): undefined => undefined,
});

export const StateProvider: FC = ({ children }) => {
  const [state, setState] = useState<AppStateType>({});

  const updateState = useCallback((content: AppStateType) => {
    setState({ ...state, ...content });
    // eslint-disable-next-line
  }, []);

  const actions: AppStateProviderContext = {
    state,
    updateState,
  };

  return <AppStateContext.Provider value={actions}>{children}</AppStateContext.Provider>;
};
