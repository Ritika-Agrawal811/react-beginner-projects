import Wrapper from "./UI/Wrapper";
import TourCard from "./TourCard";
import styles from "../css/list.module.css";

const List = ({ heading, toursArray, filterToursHandler }) => {
  return (
    <Wrapper>
      <h2 className={styles["sub-heading"]}>{heading}</h2>
      <div className={styles["row"]}>
        {toursArray.map((tour) => {
          return (
            <TourCard
              key={tour.id}
              tour={tour}
              filterToursHandler={filterToursHandler}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default List;
