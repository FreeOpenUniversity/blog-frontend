import Link from "next/link";

export default function Article({ articles }) {
    return (
        <>
            {
                articles.map((article, index) =>
                    <div key={index}>
                        <Link as={`/blogs/${article.slug}`} href="/blogs/[id]">
                            <h1>{article.title}</h1>
                        </Link>
                    </div>)
            }
        </>
    )
}

