import { AppStateProviderContext, AppStateContext } from "../components/AppStateProvider/AppStateProvider";
import { useContext } from "react";

export function useAppState(): AppStateProviderContext {
  return useContext<AppStateProviderContext>(AppStateContext);
}
