import { useState } from "react";
import useAxios from "../hooks/useAxios";
import axios from "../apis/riddle";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  styled,
  Box,
  Skeleton,
} from "@mui/material";

const Container = styled(Card)`
  width: 800px;
  margin: 0 auto;
  padding: 1em;
  box-shadow: 0 0 5px #aaa;
  background: radial-gradient(100% 50% at 40% 0, #e6e6fa 70%, #fefefe 70%);

  @media (max-width: 820px) {
    width: 95%;
  }
`;

const SkeletonContainer = styled(Box)`
  width: 800px;
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    width: 95%;
  }
`;

const Riddle = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [response, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/v1/riddles",
    requestConfig: {
      headers: {
        Accept: "application/json",
      },
    },
  });

  const getNewRiddleHandler = () => {
    refetch();
    setShowAnswer(false);
  };

  return (
    <article>
      {loading && (
        <SkeletonContainer>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            sx={{ marginBottom: "1em" }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={100}
            sx={{ marginBottom: "1em" }}
          />
          <Box sx={{ display: "flex" }}>
            <Skeleton
              variant="rectangular"
              width={100}
              height={40}
              sx={{ marginRight: "1em" }}
            />
            <Skeleton variant="rectangular" width={100} height={40} />
          </Box>
        </SkeletonContainer>
      )}
      {!loading && error && (
        <p>Error loading riddles. Please trying reloading the app.</p>
      )}
      {!loading && !error && (
        <Container>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontWeight: "700",
              background: "#4B0082",
              padding: "0.75em 0.5em",
              borderRadius: "0.15em",
              color: "#fff",
            }}
          >
            Riddle: {response[0].title}
          </Typography>

          <CardContent>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ margin: "0.75em 0", fontWeight: "700" }}
            >
              Q. {response[0].question}
            </Typography>
            {showAnswer && (
              <Typography
                variant="p"
                color="text.secondary"
                sx={{ color: "green" }}
              >
                {response[0].answer}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="success"
              sx={{ fontWeight: "700" }}
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? "hide answer" : "show Answer"}
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={getNewRiddleHandler}
            >
              Next Riddle
            </Button>
          </CardActions>
        </Container>
      )}
    </article>
  );
};

export default Riddle;
