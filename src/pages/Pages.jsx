// Pages.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Searched from "./Searched";
import SearchBar from "../components/SearchBar";
import Recipe from "./Recipe";

const Pages = () => {
  return (
    <div>
      
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched" element={<Searched />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default Pages;
