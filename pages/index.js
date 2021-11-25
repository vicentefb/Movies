import Head from "next/head";
import styles from "../styles/Movies.module.css";
import Movie from "../src/components/Movie";
import { useEffect, useState } from "react";

export default function Home({ trendingMovies }) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(trendingMovies);
  }, [trendingMovies]);
  console.log(trendingMovies);
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies App</title>
        <meta name="description" content="Movies app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Movies App</h1>
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
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
  );
  let trendingMovies = await data.json();
  trendingMovies = await trendingMovies.results;
  //console.log(trendingMovies[0]);

  return {
    props: { trendingMovies },
  };
}
