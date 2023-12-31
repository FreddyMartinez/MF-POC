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

declare module "mf1/App" {
  const App: ({
    basename,
    value,
    useHostState,
  }: MicroFrontProps) => JSX.Element;
  export default App;
}
declare module "mf1/Btn";
