import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../All_styles/Upcoming.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import axios from "axios";

function Upcoming() {
  const [loading, setLoading] = useState(true);
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Loader center content="loading" size="lg" className="text-info" />
        </div>
      ) : (
        <div className="grid-container mt-4">
          {movies.map((movie, ind) => (
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

export default Upcoming;
