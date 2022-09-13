import React from "react";
import styles from "./RecentPostItem.module.css";

const RecentPostItem = ({ name, url, descr }) => (
  <li className={styles.PostList_item}>
    <div className={styles.avatar}>
      <img src={url} alt="NF" />
    </div>
    <div className={styles.description}>
      <div className={styles.user_name}>{name}</div>
      <div className={styles.PostList_text}>{descr}</div>
    </div>
  </li>
);
export default RecentPostItem;
