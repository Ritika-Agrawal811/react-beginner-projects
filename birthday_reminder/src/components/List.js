import { useState } from "react";

import Wrapper from "./Wrapper";
import Button from "./Button";
import BirthdayCount from "./BirthdayCount";

import styles from "../css/list.module.css";
import data from "../data";

const List = () => {
  const [people, setPeople] = useState(data);

  const emptyListHandler = () => {
    setPeople([]);
  };

  return (
    <>
      <BirthdayCount people={people} />
      <Wrapper
        className={`${styles["container"]}  ${styles["list-container"]}`}
      >
        <ul className={styles["people-list"]}>
          {people.map((person) => {
            const { id, name, age, image } = person;

            return (
              <li key={id} className={styles["person-card"]}>
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </li>
            );
          })}
        </ul>
        <Button className={styles["clear-all-btn"]} onClick={emptyListHandler}>
          Clear All
        </Button>
      </Wrapper>
    </>
  );
};

export default List;
