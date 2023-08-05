import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Controls from "./Controls";
import styles from "../css/testimonial.module.css";
import users from "../data";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [indicator, setIndicator] = useState(0);
  const { name, job, image, text } = users[index];

  const slideVariants = {
    moveLeft: {
      x: "-100%",
    },
    visible: {
      x: "0",
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={styles["flex-center"]}>
      <article className={styles.container}>
        <div className={styles["indicator-container"]}>
          {users.map((value, index) => {
            return (
              <div
                key={value.id}
                className={`${styles.indicator} ${
                  index === indicator ? styles.active : ""
                }`}
              ></div>
            );
          })}
        </div>
        <AnimatePresence>
          <motion.figure
            key={index}
            variants={slideVariants}
            initial="moveLeft"
            animate="visible"
            exit="exit"
            className={styles["testimonial-image"]}
          >
            <img src={image} alt="" />
          </motion.figure>
        </AnimatePresence>
        <div className={styles["testimonial-content"]}>
          <h2 className={styles["testimonial-name"]}>{name}</h2>
          <h4 className={styles["testimonial-designation"]}>{job}</h4>
          <p className={styles["testimonial-text"]}>{text}</p>
        </div>
        <Controls setIndex={setIndex} setIndicator={setIndicator} />
      </article>
    </section>
  );
};

export default Testimonial;
