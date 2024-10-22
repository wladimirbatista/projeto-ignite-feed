import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} imagem="https://github.com/wladimirbatista.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wladimir Batista</strong>
              <time title="03 de outubro de 2024" dateTime='2024-03-10 19:16:40'>Publicado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        
        <footer>
          <button onClick={handleLikeComment}>
           <ThumbsUp/>
           Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}