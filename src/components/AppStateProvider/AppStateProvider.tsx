import React, { FC, createContext, useState, useCallback } from "react";

export interface AppStateType {
  screenOn: boolean;
}

export interface AppStateProviderContext {
  state: AppStateType;
  updateState(content: AppStateType): void;
}

const initialState: AppStateType = {
  screenOn: true,
};

export const AppStateContext = createContext<AppStateProviderContext>({
  state: initialState,
  updateState: () => (): undefined => undefined,
});

export const StateProvider: FC = ({ children }) => {
  const [state, setState] = useState<AppStateType>(initialState);

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
