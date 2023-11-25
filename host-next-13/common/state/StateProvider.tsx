import { ReactNode } from "react";
import { stateContext } from "./StateContext";
import { StateManager } from "./StateManager";

const counterManager = new StateManager(0);

export function StateProvider({ children }: { children: ReactNode }) {
  return (
    <stateContext.Provider value={counterManager}>
      {children}
    </stateContext.Provider>
  );
}
