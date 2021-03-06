import Head from "next/head";
import styles from "../styles/Movies.module.css";
import Movie from "../src/components/Movie";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home({ trendingMovies }) {
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInput] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setSearchResults(trendingMovies);
  }, [trendingMovies]);

  const search = async (event) => {
    event.preventDefault();
    let movies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );

    movies = await movies.json();
    movies = await movies.results;
    setSearchResults(movies);
  };
  return (
    <>
      <div className="red-background">Movies App</div>
      <div className="container">
        <Head>
          <title>Movies App</title>
          <meta name="description" content="Movies app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Row>
          <Col md={6} className="m-auto">
            <form className="search-form" onSubmit={search}>
              <input
                className="search"
                name="searchTerm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search for a movie"
                required
              />

              <button
                className="btn-search"
                disabled={search === ""}
                onClick={async () => {
                  let movies = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}&page-1&include_adult=false`
                  );
                  movies = await movies.json();
                  movies = await movies.results;
                  setSearchResults(movies);
                }}
              >
                Search
              </button>
            </form>
          </Col>
        </Row>
        <Container>
          <div className="movie-search-results-grid">
            {searchResults.map((each, index) => {
              return (
                <Movie
                  key={index}
                  index={each.id}
                  title={each.title}
                  poster_path={each.poster_path}
                  overview={each.overview}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`
  );
  let trendingMovies = await data.json();
  trendingMovies = await trendingMovies.results;

  return {
    props: { trendingMovies },
  };
}
