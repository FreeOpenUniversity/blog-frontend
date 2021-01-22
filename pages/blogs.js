import Article from '../components/article';
import { fetchAPI } from "../lib/api";

export default function Blogs({ articles }) {
    return (
        <div><Article articles={articles} /></div>
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