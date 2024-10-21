import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

import styles from "./Post.module.css";
// import { comments_data } from "../../data/coments_data";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana, hein?"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    // event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imagem={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <small>{author.role}</small>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) =>
          line.type === "paragraph" ? (
            <p key={line.content}>{line.content}</p>
          ) : (
            <p key={line.content}>
              <a href="">{line.content}</a>
            </p>
          )
        )}
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Escreva um comentário..."
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {/* <Comment />
        <Comment />
        <Comment /> */}
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            content={comment}
            // onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}