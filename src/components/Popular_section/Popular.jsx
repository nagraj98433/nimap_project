import React, { useState, useEffect } from "react";
import "../../All_styles/Popular.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Popular() {
  const { query } = useParams();

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
  const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`;

  useEffect(() => {
    if (searchQuery !== "") {
      axios
        .get(`${SEARCH_URL}&query=${searchQuery}`)
        .then((response) => {
          setSearchResults(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    } else {
      axios
        .get(API_URL_POPULAR)
        .then((response) => {
          setSearchResults(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [searchQuery, API_URL_POPULAR, SEARCH_URL]);

  const handleSearch = () => {
    setLoading(true);
    // Trigger search when the button is clicked
  };

  return (
    <div>
      {/* <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div> */}

      {loading ? (
        <div>
          <Loader center content="loading" size="lg" className="text-info" />
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Popular;
