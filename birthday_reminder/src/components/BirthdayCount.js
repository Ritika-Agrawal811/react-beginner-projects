import Wrapper from "./Wrapper";
import styles from "../css/list.module.css";

const BirthdayCount = ({ people }) => {
  return (
    <Wrapper className={`${styles["container"]} ${styles["birthday-count"]}`}>
      <h2 className={styles["birthday-heading"]}>
        <span>{people.length}</span> Birthdays Today
      </h2>
    </Wrapper>
  );
};

export default BirthdayCount;
