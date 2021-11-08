import { useRouter } from "next/dist/client/router";
import React from "react";
import ArticleItem from "../../components/ArticleItem";
import Comments from "../../components/Comments";
import articleServic from "../../services/article.service";

function articlePage(props: any) {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
      return (
          <>
          <ArticleItem article={props.article}></ArticleItem>
          <Comments articleId={id}></Comments>          
          </>
        )
  
  }
  
  export const getServerSideProps = async ({query }: any) => {
      const res = (await articleServic.getArticleById(query.id)).data;
      const article = await res.data;
      console.log(article)
      return {
        props: {
          article: {
            title: article.title,
            image: article.image,
            content: (article.content as any[]).filter(c => c.type === 'paragraph'),
          },
        },
      }
    }
   
    export default articlePage;
  