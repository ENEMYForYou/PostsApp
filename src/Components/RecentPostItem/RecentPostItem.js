import React from "react";
import styles from "./RecentPostItem.module.css";

import checkImage from "../../utils/checkImage";
import isValidHttpUrl from "../../utils/checkUrl";

const RecentPostItem = ({ name, url, descr }) => {
  const isUrl = isValidHttpUrl(url);
  const isImage = checkImage(url);
  const pluggedImage =
    "https://www.meme-arsenal.com/memes/eebc05e99e70baf7ca75f49b0289b92a.jpg";

  return (
    <li className={styles.PostList_item}>
      <div className={styles.avatar}>
        <img src={isUrl && isImage ? url : pluggedImage} alt="NF" />
      </div>
      <div className={styles.description}>
        <div className={styles.user_name}>{name}</div>
        <div className={styles.PostList_text}>{descr}</div>
      </div>
    </li>
  );
};
export default RecentPostItem;
