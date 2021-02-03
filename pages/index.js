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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.0.0/css/font-awesome.min.css" />
        </Head>
        <main>
          <Top />
          <Demo />
          <Project />
          <BlogDisplay articles={articles} />

        </main>
        <footer>
          <div className="mt5 tc dark-gray flex items-center justify-center mb2">
            <a href="https://discord.gg/4svG863772" target="_blank" rel="noopener noreferrer">
              <img src="/images/discord-brands.svg" alt="discord logo" className="w3 ph2 grow" />
            </a>
            <a href="https://github.com/FreeOpenUniversity" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-brands.svg" alt="github logo" className="w3 ph2 grow" />
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


