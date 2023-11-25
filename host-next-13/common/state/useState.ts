import { useContext, useEffect, useState } from "react";
import { stateContext } from "./StateContext";

export function useCounterState() {
  const manager = useContext(stateContext);
  const [counter, setCounter] = useState(manager.data);

  const observer = (n: number) => {
    setCounter(n);
  };

  useEffect(() => {
    manager.subscribe(observer);
    return () => {
      manager.unsubscribe(observer);
    };
  }, []);

  const add = () => {
    manager.data = counter + 1
  }

  const subtract = () => {
    manager.data = counter - 1
  } 

  return { counter, add, subtract };
}
