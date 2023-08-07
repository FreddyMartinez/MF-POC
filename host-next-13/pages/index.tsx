import dynamic from "next/dynamic";
import Button from "../components/Button";

const RemoteApp = dynamic(() => import('mf1/App'), {
  ssr: false,
});

const Page = () => {
  return (
    <div style={{ padding: '2%' }}>
      <h1>Next JS and React</h1>
      <h2>Microfront - App</h2>
      <RemoteApp basename="" value="Next 13 Host" />
      <Button text="Next" />
    </div>
  );
}


export default function Home() {
  return <Page />;
}
