import Link from "next/link";
import ArticleCard from './articleCard';
import BlogLayout from './bloglayout';

export default function Article({ articles }) {
    return (
        <BlogLayout>
            {
                articles.map((article, index) =>
                    <ArticleCard article={article} key={index} />)
            }
        </BlogLayout>
    )
}

