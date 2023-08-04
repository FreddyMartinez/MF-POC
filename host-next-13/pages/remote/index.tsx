import dynamic from "next/dynamic";

const RemoteApp = dynamic(() => import("mf1/App"), {
  ssr: false,
});

const Page = () => {
  return (
    <div style={{ padding: "2%" }}>
      <h2>Host - App</h2>
      <div>Hello</div>
      <h2>Microfront - App</h2>
      <RemoteApp value="Next 13 Host" />
    </div>
  );
};

export default Page;
