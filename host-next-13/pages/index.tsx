import dynamic from "next/dynamic";
import Button from "../common/components/Button";
import { useCounterState } from "../common/state/useState";

const RemoteApp = dynamic(() => import('mf1/App'), {
  ssr: false,
});

const Page = () => {
  const { counter, add, subtract } = useCounterState()

  return (
    <div style={{ padding: '2%' }}>
      <h1>Next JS and React</h1>
      <Button text="Subtract" onClick={subtract} />
      {counter}
      <Button text="Add" onClick={add}/>
      <h2>Microfront - App</h2>
      <RemoteApp basename="" value="Next 13 Host" />
    </div>
  );
}


export default function Home() {
  return <Page />;
}
