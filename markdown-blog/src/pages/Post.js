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

    const fetchPostData = async (markdownTitle) => {
      try {
        const fileData = await import(`../markdown/${markdownTitle}.md`);
        let postData = await fetch(fileData.default);
        postData = await postData.text();

        setPostContent(postData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPostData(markdownTitle);
  }, [params.id]);

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
