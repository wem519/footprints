import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDbJc0IHYWiolCpNMz7Un90a_nmXhzpIIg",
  authDomain: "footprints-4436f.firebaseapp.com",
  projectId: "footprints-4436f",
  storageBucket: "footprints-4436f.appspot.com",
  messagingSenderId: "409660576475",
  appId: "1:409660576475:web:77732b9022a46aad10f2fe",
  measurementId: "G-B23V1QRN14",
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
