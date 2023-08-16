// import reactLogo from "./assets/react.svg";
import "./App.css";
import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header_section/Header";
import Popular from "./components/Popular_section/Popular";
import Top_rated from "./components/Top_rated_section/Top_rated";
import Upcoming from "./components/Upcoming_section/Upcoming";
import MovieDetail from "./components/Movie_details/MovieDetail";
import SearchResults from "./components/Search/SearchResults";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/search/:query" exact element={<SearchResults />} />
        <Route path="/" exact element={<Popular />} />
        <Route path="/top_rated" element={<Top_rated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
