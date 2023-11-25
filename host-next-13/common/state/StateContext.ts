import { createContext } from "react";
import { StateManager } from "./StateManager";

export const stateContext = createContext(undefined as unknown as StateManager<number>)