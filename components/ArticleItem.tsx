import React from 'react';
import styles from '../styles/article.module.css';
function ArticleItem (props: any) {
    console.log(props.article);
    return <>
            <div className="card">
                <h2>{props.article.title} &rarr;</h2>
                <img src={props.article.image} alt="thumbnail" className={styles.articleImg}/>
                {props.article.content.map((c: any, i: number) => {
                   return <p  key={i} dangerouslySetInnerHTML={{__html: c.data.text}}></p>
                })}
          </div>
           </>
}
export default ArticleItem;