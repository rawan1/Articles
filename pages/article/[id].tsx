import { useRouter } from "next/dist/client/router";
import React from "react";
import ArticleItem from "../../components/ArticleItem";
import Comments from "../../components/Comments";
import articleServic from "../../services/article.service";
import articleProps from "../../types/articleProps";

function articlePage({ article }: articleProps) {
    const router = useRouter();
    const { id } = router.query;
      return (
          <>
          <ArticleItem article={article}></ArticleItem>
          <Comments articleId={article.id}></Comments>          
          </>
        )
  
  }
  
  export const getServerSideProps = async ({query }: any) => {
      const res = (await articleServic.getArticleById(query.id)).data;
      const article = await res.data;
      return {
        props: {
          article: {
            id: article.id,
            title: article.title,
            image: article.image,
            content: (article.content as any[]).filter(c => c.type === 'paragraph'),
          },
        },
      }
    }
   
    export default articlePage;
  