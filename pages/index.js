import Head from 'next/head'
import Top from '../components/top';
import Layout from "../components/layout";
import Project from "../components/project";
import Demo from '../components/demo';
import BlogDisplay from '../components/blogdisplay';
import { fetchAPI } from "../lib/api";

export default function Home({ articles }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Free Open University - Home of Free Learning</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Top />
          <Demo />
          <Project />
          <BlogDisplay articles={articles} />

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

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles] = await Promise.all([
    fetchAPI("/articles?status=published")
  ]);

  return {
    props: { articles },
    revalidate: 1,
  };
}


