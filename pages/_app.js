import "../styles/globals.css";
import localFont from "next/font/local";

const dakotaFont = localFont({ src: "../public/fonts/Dakota_Regular.ttf" });
// const futuraFont = localFont({ src: "../public/fonts/Futura.ttc" });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
``;
