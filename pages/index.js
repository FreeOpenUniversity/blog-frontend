import Head from 'next/head'
import Top from '../components/top';
import Layout from "../components/layout";
import Project from "../components/project";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Top />
          <Project />
        </main>
        <footer>
          <div className="mt5 mb2 tc">
            <a href="https://discord.gg/4svG863772" target="_blank" rel="noopener noreferrer">
              <img className="w5" src="/images/join-us-on-discord.png" alt="discord banner" />
            </a>
          </div>
        </footer>
      </div>
    </Layout>
  )
}


