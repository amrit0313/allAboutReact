import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import LoadingSpinner from "./components/loader/image";
import "./App.css";

// function App() {
//   const [movies, setMovies] = useState([]);
//   function fetchMoviesHandler() {
//     fetch("https://swapi.dev/api/films/")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const transformedData = data.results.map((movieData) => {
//           return {
//             id: movieData.episode_id,
//             title: movieData.title,
//             openingText: movieData.opening_crawl,
//             releaseDate: movieData.release_date,
//           };
//         });
//         setMovies(transformedData);
//       });
//   }

// we can do this with async await too:
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();

      const transformedData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <LoadingSpinner />}
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>something went wrong</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
