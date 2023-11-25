import { AppProps } from "next/app";
import "../styles/globals.css";
import { StateProvider } from "../common/state/StateProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
