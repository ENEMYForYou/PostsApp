import React from "react";
import styles from "./PostListItem.module.css";

const PostListItem = ({ name, url, descr, removePost }) => (
  <li className={styles.PostList_item}>
    <div className={styles.Post_container}>
      <div className={styles.avatar}>
        <img src={url} alt="URL NotFound" />
      </div>
      <div className={styles.description}>
        <div className={styles.user_name}>{name}</div>
        <div className={styles.PostList_text}>{descr}</div>
      </div>
    </div>
    <section className={styles.PostList_actions}>
      <button
        type="button"
        className={styles.PostList_button}
        onClick={removePost}
      >
        Delete
      </button>
    </section>
  </li>
);
export default PostListItem;
