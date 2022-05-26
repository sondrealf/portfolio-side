import '../styles/globals.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
