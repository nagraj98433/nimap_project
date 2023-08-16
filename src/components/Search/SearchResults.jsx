import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchResults() {
  const { query } = useParams(); // Get the search query from the URL parameter
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`;

  useEffect(() => {
    axios
      .get(SEARCH_URL)
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [SEARCH_URL]);

  console.log(searchResults);

  return (
    <>
      <div className="grid-container mt-4">
        {searchResults.map((movie, ind) => (
          <div className="grid-item" key={ind}>
            <div className="movie_card_img_container">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="movie_img"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="movie_card_content_container">
              <div className="movie_detail">
                <p className="mb-2 mt-2 fw-400 text-light">{movie.title}</p>
                <p className="fw-400 text-light">{movie.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchResults;
