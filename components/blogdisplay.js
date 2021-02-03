import React from "react";
import Link from "next/link";
import Image from "./image";

const DisplayCard = function ({ article }) {
    return (
        <div className="pa2">
            <Link as={`/blogs/${article.slug}`} href="/blogs/[id]">
                <div className="tc pointer">
                    <div className="shadow-2 pa0">
                        <Image image={article.image} />
                    </div>
                    <div className="seoge ttc f4 b">
                        <p>{article.title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function BlogDisplay({ articles }) {
    const displayArticles = articles.slice(0, 3)
    return (
        <div className="tc w-80 center">
            <Link href="/blogs"><a id="blogs"><h2 className="Staat f2 underline pointer">NLP Blogs</h2></a></Link>
            <div className="flex items-center justify-center center flex-nowrap-l flex-wrap">

                {
                    articles
                        ? displayArticles.map((article, index) => <DisplayCard key={index} article={article} />)
                        : <></>
                }
            </div>
        </div>
    )
}