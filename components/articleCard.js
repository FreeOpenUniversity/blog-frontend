import React from "react";
import Link from "next/link";
import Image from "./image";

const ArticleCard = ({ article }) =>
    <>
        <Link as={`/blogs/${article.slug}`} href="/blogs/[id]">
            <div className="flex flex-wrap mb3 pointer center">
                <div className="w-50 w-100-m pa2">
                    <div>
                        <a className="link gray">
                            <div>
                                <Image image={article.image} />
                            </div>
                        </a>

                    </div>
                </div>
                <div className="w-50 w-100-m pa2 grey">
                    <div>
                        <p className="blogcat ttu b">
                            {article.category.name}
                        </p>
                        <p className="blogtitle ttc f1">
                            {article.title}
                        </p>
                        <p>{article.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    </>

export default ArticleCard;