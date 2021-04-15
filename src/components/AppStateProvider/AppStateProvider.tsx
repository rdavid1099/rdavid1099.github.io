import React, { FC, createContext, useState, useCallback } from "react";
import { ROOT_PAGE, PageType } from "../../constants/pages";

export interface AppStateType {
  screenOn: boolean;
  activePage: PageType;
}

export interface AppStateProviderContext {
  state: AppStateType;
  updateState(content: Partial<AppStateType>): void;
}

const initialState: AppStateType = {
  screenOn: true,
  activePage: ROOT_PAGE,
};

export const AppStateContext = createContext<AppStateProviderContext>({
  state: initialState,
  updateState: () => (): undefined => undefined,
});

export const StateProvider: FC = ({ children }) => {
  const [state, setState] = useState<AppStateType>(initialState);

  const updateState = useCallback((content: Partial<AppStateType>) => {
    setState({ ...state, ...content });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actions: AppStateProviderContext = {
    state,
    updateState,
  };

  return <AppStateContext.Provider value={actions}>{children}</AppStateContext.Provider>;
};
