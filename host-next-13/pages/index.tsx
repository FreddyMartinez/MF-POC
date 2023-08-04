import dynamic from "next/dynamic";
import Button from "../components/Button";

const RemoteApp = dynamic(() => import('mf1/App'), {
  ssr: false,
});

const RemoteBtn = dynamic(() => import('mf1/Btn'), {
  ssr: false,
});

const Page = () => {
  return (
    <div style={{ padding: '2%' }}>
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      <Button />
      <h2>Microfront - Button</h2>
      <RemoteBtn />
      <h2>Microfront - App</h2>
      <RemoteApp value="Next 13 Host" />
    </div>
  );
}


export default function Home() {
  return <Page />;
}
