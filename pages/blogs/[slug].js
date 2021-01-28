import Image from "../../components/image";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import BlogLayout from '../../components/bloglayout';
import Seo from "../../components/seo";

export default function Blog({ article }) {
    const seo = {
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: article.image,
        article: true,
    };

    return (
        <BlogLayout>
            <Seo seo={seo} />
            <div className="pa2">
                <h1 className="title1 ttc f1">{article.title}</h1>
            </div>
            <div className="pa2">
                <hr />
                <div className="flex items-center">
                    <div>
                        {article.author.picture && (
                            <Image
                                image={article.author.picture}
                                style={{
                                    borderRadius: "100%",
                                    height: "100px",
                                    width: "100px"
                                }}
                            />
                        )}
                    </div>
                    <div className="ph2">
                        <p>
                            <b>{article.author.name}</b>
                        </p>
                    </div>
                </div>
                <ReactMarkdown source={article.content} escapeHtml={false} />
            </div>
        </BlogLayout>
    )
}

export async function getStaticPaths() {
    const articles = await fetchAPI("/articles");

    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const articles = await fetchAPI(
        `/articles?slug=${params.slug}&status=published`
    );

    return {
        props: { article: articles[0] },
        revalidate: 1,
    };
}