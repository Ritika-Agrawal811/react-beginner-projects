import { useState, useEffect } from "react";

import Loading from "./UI/Loading";
import List from "./List";
import Wrapper from "./UI/Wrapper";

import styles from "../css/list.module.css";

const url = "https://course-api.com/react-tours-project";

const ToursSection = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedTours, setSavedTours] = useState([]);

  const filterRecommenedToursHandler = (id) => {
    let recommendedTours = tours.filter((value) => value.id !== id);
    let bookmarked = tours.filter((value) => value.id === id);

    setTours(recommendedTours);
    setSavedTours((prevState) => {
      return [...prevState, ...bookmarked];
    });
  };

  const filterSavedToursHandler = (id) => {
    let bookMarkedTours = savedTours.filter((value) => value.id !== id);
    let recommended = savedTours.filter((value) => value.id === id);

    setSavedTours(bookMarkedTours);
    setTours((prevState) => {
      return [...prevState, ...recommended];
    });
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url).then((res) => res.json());
      setLoading(false);
      setTours(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper className={styles["container"]}>
          {tours.length !== 0 && (
            <List
              toursArray={tours}
              heading="Recommended"
              filterToursHandler={filterRecommenedToursHandler}
            />
          )}
          {savedTours.length !== 0 && (
            <List
              toursArray={savedTours}
              heading="Saved"
              filterToursHandler={filterSavedToursHandler}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};

export default ToursSection;
