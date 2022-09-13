import React from "react";

import styles from "./RecentPosts.module.css";
import RecentPostItem from "../RecentPostItem/RecentPostItem";

const RecentPosts = ({ posts }) => {
  return (
    <ul className={styles.RecentPostList}>
      Recent posts
      {posts
        .filter((p, i) => i >= posts.length - 5)
        .reverse()
        .map(({ id, name, url, descr }) => (
          <RecentPostItem name={name} url={url} descr={descr} key={id} />
        ))}
    </ul>
  );
};

export default RecentPosts;
