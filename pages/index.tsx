import Head from 'next/head'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Sondre Alfnes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mx-auto mt-16 antialiased">
        <About />
        <Projects />
      </main>
    </div>
  )
}
