import React, { useEffect, useState } from "react";
import styles from "../css/post.module.css";
import Markdown from "markdown-to-jsx";
import CodeSnippet from "../components/CodeSnippet";
import { useParams } from "react-router-dom";
import { topics } from "../data/topics";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  const params = useParams();

  useEffect(() => {
    const markdownTitle = topics.find(
      (item) => item.id.toString() === params.id
    ).markdownTitle;

    import(`../markdown/${markdownTitle}.md`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => setPostContent(res))
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <section className={`container ${styles["post__container"]}`}>
      <article className={styles["post-article"]}>
        <Markdown
          options={{
            overrides: {
              CodeSnippet: {
                component: CodeSnippet,
              },
            },
          }}
        >
          {postContent}
        </Markdown>
      </article>
    </section>
  );
};

export default Post;
