import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../All_styles/MovieDetail.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";
import CastDetail from "../Cast_details/CastDetail";
import axios from "axios";

function MovieDetail() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [API_URL]);

  console.log(movieDetails);

  return (
    <div>
      {movieDetails ? (
        <>
          <div className="grid-container_movieDetail">
            <div className="grid-item_movieDetail content">
              <div className="d-flex">
                <div className="img_container_movieD">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                    alt="movie_img"
                    className="img-fluid"
                  />
                </div>
                <div className="MovieDetailS">
                  <div className="movie_title">{movieDetails.title}</div>
                  <div className="movie_rating font mt-2">
                    Rating: {movieDetails.vote_average}
                  </div>
                  <div className="movie_release font mt-4">
                    Release Date: {movieDetails.release_date}
                  </div>
                  <div className="movie_genres font mt-4">
                    Tagline : {movieDetails.tagline},
                  </div>
                </div>
              </div>
              <div className="overview_container">
                <div className="overview">Overview</div>
                <div className="overview_details font">
                  {movieDetails.overview}
                </div>
              </div>
            </div>
            <div className="grid-item_movieDetail poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt="movie_img"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="movie_cast_container">
            <CastDetail />
          </div>
        </>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
}

export default MovieDetail;
