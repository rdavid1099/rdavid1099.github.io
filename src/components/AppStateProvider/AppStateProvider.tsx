import React, { FC, createContext, useState, useCallback } from "react";

export interface AppStateProviderContext {
  state: Record<string, unknown>;
  updateState(content: Record<string, unknown>): void;
}

export const AppStateContext = createContext<AppStateProviderContext>({
  state: {},
  updateState: () => (): undefined => undefined,
});

export const StateProvider: FC = ({ children }) => {
  const [state, setState] = useState<Record<string, unknown>>({});

  const updateState = useCallback((content: Record<string, unknown>) => {
    setState({ ...state, ...content });
    // eslint-disable-next-line
  }, []);

  const actions: AppStateProviderContext = {
    state,
    updateState,
  };

  return <AppStateContext.Provider value={actions}>{children}</AppStateContext.Provider>;
};
