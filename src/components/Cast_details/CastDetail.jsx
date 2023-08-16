import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../All_styles/CastDetail.css";
import axios from "axios";

function CastDetail() {
  const { id } = useParams();

  const [credits, setCredits] = useState([]);
  const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
  const creditsURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    // Fetch credits information
    axios
      .get(creditsURL)
      .then((response) => {
        setCredits(response.data.cast);
      })
      .catch((error) => {
        console.error("Error fetching credits:", error);
      });
  }, [creditsURL]);

  console.log(credits);

  return (
    <div>
      <h3 className="text-light">Cast:</h3>
      {credits.length > 0 ? (
        <div class="grid-container_cast">
          {credits.slice(0, 6).map((castMember) => (
            <div class="grid-item_cast" key={castMember.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                  alt="movie_img"
                  className="img-fluid"
                />
              </div>
              <div className="font">{castMember.name}</div>
              <div className="font">Character: {castMember.character}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading cast information...</p>
      )}
    </div>
  );
}

export default CastDetail;
