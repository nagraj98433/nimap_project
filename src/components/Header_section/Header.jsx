import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../All_styles/Header.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`); // Redirect to search results page
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg_header fixed_header">
        <div className="container-fluid">
          <li>
            <Link
              to="/"
              className="navbar-brand text-light fw-bold text-decoration-none"
            >
              MovieDb
            </Link>
          </li>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-secondary fw-bold text-decoration-none"
                >
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/top_rated"
                  className="nav-link text-secondary fw-bold text-decoration-none"
                >
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/upcoming"
                  className="nav-link text-secondary fw-bold text-decoration-none"
                >
                  Upcoming
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              {/* Use onSubmit for the form */}
              <input
                className="form-control me-2"
                type="search"
                placeholder="Movie Name"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
