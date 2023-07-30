import React from "react";
import { topics } from "../data/topics";
import ArticleCard from "../components/ArticleCard";

import styles from "../css/articles.module.css";

const ArticleCardsContainer = () => {
  return (
    <section className={` container ${styles["articles___container"]}`}>
      {topics.map((article) => {
        return (
          <ArticleCard
            key={article.id}
            data={article}
          />
        );
      })}
    </section>
  );
};

export default ArticleCardsContainer;
