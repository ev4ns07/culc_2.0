import "../style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css?family=Orbitron:500%7CRoboto:300,400,500&subset=cyrillic-ext"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
