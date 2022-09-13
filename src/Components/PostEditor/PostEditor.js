import React, { Component } from "react";
import styles from "./PostEditor.module.css";

export default class PostEditor extends Component {
  state = {
    inputValue: "",
    name: "",
    url: "",
    descr: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddPost(this.state);

    this.setState({ name: "", url: "", descr: "" });
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <form className={styles.PostEditor} onSubmit={this.handleSubmit}>
          <div className={styles.form__group}>
            <input
              type="text"
              className={styles.form__field}
              placeholder="Your name"
              name="name"
              id="name"
              onChange={this.handleChange}
              required
              value={this.state.name}
            />
          </div>
          <div className={styles.form__group}>
            <input
              type="text"
              className={styles.form__field}
              placeholder="Your avatar URL"
              name="url"
              onChange={this.handleChange}
              required
              value={this.state.url}
            />
          </div>
          <div className={styles.form__group}>
            <textarea
              type="text"
              className={styles.form__field_text}
              placeholder="Type text here"
              name="descr"
              onChange={this.handleChange}
              required
              value={this.state.descr}
            />
          </div>
          <button type="submit" className={styles.PostEditor_button}>
            Add post
          </button>
        </form>
      </>
    );
  }
}
