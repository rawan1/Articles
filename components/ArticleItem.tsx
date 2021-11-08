import React from 'react';
import styles from '../styles/article.module.css';
import articleProps from '../types/articleProps';


function ArticleItem (props: articleProps) {
    return <>
            <div className="card">
                <h2>{props.article.title}</h2>
                <img src={props.article.image} alt="thumbnail" className={styles.articleImg}/>
                {props.article.content.map((c: any, i: number) => {
                   return <p  key={i} dangerouslySetInnerHTML={{__html: c.data.text}}></p>
                })}
          </div>
           </>
}
export default ArticleItem;