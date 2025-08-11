import { useState, useEffect, useRef } from "react";

const KEY = "2eb8ba7c"


export default function useMovies(query , callback){

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
   

  useEffect(function () {
    //callback?.();

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');
        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await response.json()

        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
        setError('');
      } catch (err) {
        console.log(err.message);

        if (err.name !== "AbortError") {
          setError(err.message);
          return;
        }
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return {movies , isLoading , error}

}