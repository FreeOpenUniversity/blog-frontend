import Layout from '../../components/layout';
import Image from "../../components/image";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";

export default function Blog({ article }) {
    const artileStyle = "w-80-l w-100 center ph2";

    return (
        <>
            <div className={artileStyle}>
                <h1 className="title1 ttc f5">{article.title}</h1>
            </div>
            <div>
                <div className={artileStyle}>
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
                            {/* <p className="">
                                <Moment format="L">{article.published_at}</Moment>
                            </p> */}
                        </div>
                    </div>
                    <ReactMarkdown source={article.content} escapeHtml={false} />
                </div>

            </div>
        </>
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