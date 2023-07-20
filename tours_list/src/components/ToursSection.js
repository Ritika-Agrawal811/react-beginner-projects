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
  const [recommendedTours, setRecommendedTours] = useState([]);

  const filterToursHandler = (id) => {
    let updatedTours = tours.map((value) => {
      if (value.id === id) {
        value.isBookmarked = !value.isBookmarked;
      }

      return value;
    });

    setTours(updatedTours);
    filterRecommendToursHandler();
    filterSavedToursHandler();
  };

  const filterRecommendToursHandler = () => {
    let filteredTours = tours.filter((value) => value.isBookmarked === false);

    setRecommendedTours(filteredTours);
  };

  const filterSavedToursHandler = () => {
    let filteredTours = tours.filter((value) => value.isBookmarked);

    setSavedTours(filteredTours);
  };

  // Fetch Tours Data from API
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url)
        .then((res) => res.json())
        .then((res) =>
          res.map((item) => {
            // Adding isBoomarked flag for each tour object in the response
            item.isBookmarked = false;
            return item;
          })
        );
      setLoading(false);
      setTours(response);
      setRecommendedTours(response);
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
          {recommendedTours.length !== 0 && (
            <List
              toursArray={recommendedTours}
              heading="Recommended"
              filterToursHandler={filterToursHandler}
            />
          )}
          {savedTours.length !== 0 && (
            <List
              toursArray={savedTours}
              heading="Saved"
              filterToursHandler={filterToursHandler}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};

export default ToursSection;
