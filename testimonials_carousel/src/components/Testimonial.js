import { useState } from "react";

import Controls from "./Controls";
import styles from "../css/testimonial.module.css";
import users from "../data";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [indicator, setIndicator] = useState(0);
  const [fade, setFade] = useState("fade");
  const { name, job, image, text } = users[index];

  const showNextTestimonialHandler = () => {
    setIndex((prevState) => {
      return prevState === users.length - 1 ? 0 : prevState + 1;
    });

    setIndicator((prevState) => {
      return prevState === users.length - 1 ? 0 : prevState + 1;
    });

    setFade("fade");

    setTimeout(() => {
      setFade("");
    }, 400);
  };

  const showPrevTestimonialHandler = () => {
    setIndex((prevState) => {
      return prevState === 0 ? users.length - 1 : prevState - 1;
    });

    setIndicator((prevState) => {
      return prevState === 0 ? users.length - 1 : prevState - 1;
    });

    setFade("fade");

    setTimeout(() => {
      setFade("");
    }, 400);
  };

  return (
    <section className={styles["flex-center"]}>
      <article className={styles["container"]}>
        <div className={styles["indicator-container"]}>
          {users.map((value, index) => {
            return (
              <div
                key={value.id}
                className={
                  index === indicator
                    ? styles["active"] + " " + styles["indicator"]
                    : styles["indicator"]
                }
              ></div>
            );
          })}
        </div>
        <figure className={styles["testimonial-image"]}>
          <img src={image} alt="" className={styles[fade]} />
        </figure>
        <div className={styles["testimonial-content"]}>
          <h2 className={styles["testimonial-name"]}>{name}</h2>
          <h4 className={styles["testimonial-designation"]}>{job}</h4>
          <p className={styles["testimonial-text"]}>{text}</p>
        </div>
        <Controls
          showPrevTestimonialHandler={showPrevTestimonialHandler}
          showNextTestimonialHandler={showNextTestimonialHandler}
        />
      </article>
    </section>
  );
};

export default Testimonial;
