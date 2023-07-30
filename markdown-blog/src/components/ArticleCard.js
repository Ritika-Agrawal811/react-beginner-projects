import React from "react";
import styles from "../css/articles.module.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ data }) => {
  const { id, title, headerColor, description } = data;
  return (
    <article className={styles["article__card"]}>
      <div
        className={styles["title__background"]}
        style={{ backgroundColor: headerColor }}
      >
        <Link to={`/post/${id}`}>
          <h3>{title}</h3>
        </Link>
      </div>
      <p>{description}</p>
      <Link to={`/post/${id}`}>
        <button className={styles["read-more-btn"]}>Read More</button>
      </Link>
    </article>
  );
};

export default ArticleCard;
