import React, { Component } from "react";
import styles from "./App.module.css";

import Layout from "./Layout/Layout";
import PostsList from "./PostsList/PostsList";
import PostEditor from "./PostEditor/PostEditor";
import RecentPosts from "./RecentPosts/RecentPosts";

import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const persistedPosts = localStorage.getItem("posts");
    if (persistedPosts) {
      this.setState({
        posts: JSON.parse(persistedPosts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts !== this.state.posts) {
      localStorage.setItem("posts", JSON.stringify(this.state.posts));
    }
  }

  handleAddPost = ({ name, url, descr }) => {
    const post = {
      id: uuidv4(),
      name: name,
      url: url,
      descr: descr,
    };

    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, post],
      };
    });
    console.log(post);
    console.log(this.state);
  };
  handleRemovePost = (postId) => {
    this.setState((prevState) => {
      return {
        posts: prevState.posts.filter((post) => post.id !== postId),
      };
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.cnt_column}>
            <PostEditor onAddPost={this.handleAddPost} />
            {posts.length > 0 && (
              <PostsList posts={posts} onRemovePost={this.handleRemovePost} />
            )}
          </div>
          {posts.length > 0 && <RecentPosts posts={posts} />}
        </div>
      </Layout>
    );
  }
}
