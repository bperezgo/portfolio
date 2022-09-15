import Head from 'next/head';
import { AppProps } from 'next/app';
import { GlobalStyles } from '@styles/GlobalStyles';
import { Navbar } from '@components/Navbar';
import ErrorBoundary from '@components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
