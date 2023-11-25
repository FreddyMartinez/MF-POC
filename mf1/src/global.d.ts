type CounterStateHook = () => {
  counter: number;
  add: () => void;
  subtract: () => void;
};

type MicroFrontProps = {
  basename: string;
  value: string;
  useHostState: CounterStateHook;
};