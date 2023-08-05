import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../css/testimonial.module.css";
import users from "../data";

const Controls = ({ setIndex, setIndicator }) => {
  const showNextTestimonialHandler = () => {
    setIndex((prevState) => {
      return prevState === users.length - 1 ? 0 : prevState + 1;
    });

    setIndicator((prevState) => {
      return prevState === users.length - 1 ? 0 : prevState + 1;
    });
  };

  const showPrevTestimonialHandler = () => {
    setIndex((prevState) => {
      return prevState === 0 ? users.length - 1 : prevState - 1;
    });

    setIndicator((prevState) => {
      return prevState === 0 ? users.length - 1 : prevState - 1;
    });
  };

  return (
    <div className={styles["control-icons"]}>
      <span className={styles.icon}>
        <FaChevronLeft onClick={showPrevTestimonialHandler} />
      </span>
      <span className={styles.icon}>
        <FaChevronRight onClick={showNextTestimonialHandler} />
      </span>
    </div>
  );
};

export default Controls;
