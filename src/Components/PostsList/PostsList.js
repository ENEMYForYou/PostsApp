import React from "react";

import styles from "./PostsList.module.css";

import PostListItem from "../PostListItem/PostListItem";

const PostsList = ({ posts, onRemovePost }) => (
  <ul className={styles.PostList}>
    {posts.map(({ id, name, url, descr }) => (
      <PostListItem
        name={name}
        url={url}
        descr={descr}
        key={id}
        removePost={() => onRemovePost(id)}
      />
    ))}
  </ul>
);

export default PostsList;
