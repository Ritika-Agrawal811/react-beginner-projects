import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../css/testimonial.module.css";

const Controls = (props) => {
  const { showNextTestimonialHandler, showPrevTestimonialHandler } = props;

  return (
    <div className={styles["control-icons"]}>
      <span className={styles["icon"]}>
        <FaChevronLeft onClick={showPrevTestimonialHandler} />
      </span>
      <span className={styles["icon"]}>
        <FaChevronRight onClick={showNextTestimonialHandler} />
      </span>
    </div>
  );
};

export default Controls;
