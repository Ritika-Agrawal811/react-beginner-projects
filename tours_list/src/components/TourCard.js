import { useState } from "react";

import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import styles from "../css/list.module.css";
import Button from "./UI/Button";

const TourCard = ({ tour, filterToursHandler }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, name, info, image, price, isBookmarked } = tour;

  const showInfoHandler = () => {
    setReadMore(!readMore);
  };

  const saveCardHandler = () => {
    filterToursHandler(id);
  };

  return (
    <article className={styles["tours-card"]}>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className={styles["tour-price"]}>${price}</div>
      <div
        className={
          readMore
            ? `${styles["card-content"]} ${styles["show"]}`
            : styles["card-content"]
        }
      >
        <h3>{name}</h3>
        <p>{readMore ? info : info.slice(0, 120) + "..."}</p>
        <div>
          <Button className={styles["read-more-btn"]} onClick={showInfoHandler}>
            {readMore ? "Show Less" : "Read More"}
          </Button>

          {isBookmarked ? (
            <BsBookmarkFill
              className={styles["bookmark-icon"]}
              onClick={saveCardHandler}
            />
          ) : (
            <BsBookmark
              className={styles["bookmark-icon"]}
              onClick={saveCardHandler}
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default TourCard;
