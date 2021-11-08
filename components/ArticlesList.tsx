import React from "react";
import Link from 'next/link'

function ArticlesList(articlesList: any) {
    return <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>claps count</th>
                    <th>comments count</th>
                </tr>
            </thead>
            <tbody>
                {articlesList.articlesList.map((article: any, index: any) =>
                    <tr key={article.id}>
                        <td>
                            <Link href={`/article/${article.id}`}>
                            {article.title}
                            </Link>
                        </td>
                        <td>
                        {article.claps_count}
                        </td>
                        <td>
                            {article.comments_count}
                        </td>
                        
                    </tr>
                )}
                    </tbody>

            </table>

}
export default ArticlesList;