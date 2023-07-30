import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // API Access Token
    const getAccessToken = async () => {
      try {
        const authParams = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        };

        const result = await fetch(
          "https://accounts.spotify.com/api/token",
          authParams
        );
        if (!result.ok) throw new Error("Please reload the app");
        const data = await result.json();
        // Saving access token
        setAccessToken(data.access_token);
      } catch (error) {
        console.error(error.message);
      }
    };

    getAccessToken();
  }, []);

  // Search functionality

  const search = async () => {
    // Get request using search to get Artist ID

    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
      searchParams
    )
      .then((res) => res.json())
      .then((res) => res.artists.items[0].id);

    // Get request with Artist ID to grab all the albums from that artist

    const artistAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&limit=50`,
      searchParams
    ).then((res) => res.json());

    setAlbums(artistAlbums.items);
  };

  return (
    <div className="App">
      <Container className="my-5">
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for artist"
            type="input"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search();
              }
            }}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container className="my-5">
        <Row className="mx-2" xs={2} md={4} lg={6}>
          {albums.map((album) => {
            const { name, id, images } = album;
            return (
              <Col key={id} className="p-2">
                <Card className="px-0 h-100">
                  <Card.Img src={images[0].url} variant="top" />
                  <Card.Body className="px-1">
                    <Card.Title className="fs-6 text-center">{name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
