import { TablePagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import commentsService from "../services/comments.service";
import styles from '../styles/comments.module.css';

export default function Comments({ articleId }: any) {
    const [page, setPage] = React.useState(0);

    const [comments, setcomments] = useState([]);

    const retrieveComments = () => {
        console.log('retrieveComments')
    commentsService.getpagedComments(page, articleId)
      .then((response) => {
        setcomments(response.data.data);
        console.log('Comments');
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };
  useEffect(retrieveComments, [page]);

    return  <>
                <div className="card">
                <h2>comments</h2>
                    {comments &&
                        comments.map((comment: any, index) => (
                           <div className={styles.comments}>
                               <div>
                                   <img className={styles.avatar}
                                   src={comment.user_avatar}
                                   />
                               <span>{comment.username}</span>
                              </div>
                               <div>
                               <p>{comment.content}</p>
                               </div>
                           </div>
                        
                        ))}
                    <TablePagination count={-1} onPageChange={handleChangePage} 
                       page={page} rowsPerPage={15} rowsPerPageOptions={[]} />
                </div>
 
            </>

}