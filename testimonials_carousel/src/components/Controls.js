import styles from "../css/testimonial.module.css";
import users from "../data";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 100,
    opacity: 1,
    transition: {
      scale: {
        ease: "easeOut",
        duration: 6,
      },
    },
  },
  exit: {
    opacity: 0,
  },
};

const Controls = ({ setIndex, setIndicator, index }) => {
  const colors = ["#011f4b", "#851e3e", "#009688", "#ee4035", "#ffcc5c"];
  const randomIndex = Math.floor(Math.random() * 5);

  const showNextTestimonialHandler = () => {
    setIndex((prevState) => {
      return prevState === users.length - 1 ? 0 : prevState + 1;
    });

    setIndicator((prevState) => {
      return prevState === users.length - 1 ? 0 : prevState + 1;
    });
  };

  return (
    <span className={styles.icon} onClick={showNextTestimonialHandler}>
      Next
      <AnimatePresence>
        <motion.span
          key={index}
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.backdrop}
          style={{ backgroundColor: colors[randomIndex] }}
        ></motion.span>
      </AnimatePresence>
    </span>
  );
};

export default Controls;
