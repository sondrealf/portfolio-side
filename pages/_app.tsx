import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-neutral-900 dark:bg-gray-200">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
