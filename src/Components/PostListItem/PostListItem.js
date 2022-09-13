import React from "react";
import styles from "./PostListItem.module.css";

import checkImage from "../../utils/checkImage";
import isValidHttpUrl from "../../utils/checkUrl";

const PostListItem = ({ name, url, descr, removePost }) => {
  const isUrl = isValidHttpUrl(url);
  const isImage = checkImage(url);
  const pluggedImage =
    "https://www.meme-arsenal.com/memes/eebc05e99e70baf7ca75f49b0289b92a.jpg";
  return (
    <li className={styles.PostList_item}>
      <div className={styles.Post_container}>
        <div className={styles.avatar}>
          <img src={isUrl && isImage ? url : pluggedImage} alt="NF" />
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
};
export default PostListItem;
