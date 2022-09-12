import Head from 'next/head';
import { AppProps } from 'next/app';
import { GlobalStyles } from '@styles/GlobalStyles';
import { Navbar } from '@components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
