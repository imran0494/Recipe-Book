import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  };

  return (
    <FormStyle onSubmit={handleInputChange}>
      <h1>Recipe Book App</h1>
      <div>
        <FaSearch />
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search"
          value={input}
        />
        
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 16rem;

  padding: 1rem 0rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(56, 59, 84, 1) 63%,
      rgba(0, 212, 255, 1) 100%
    );

    font-size: 1.5rem;
    color: white;
    padding: 0.75rem 4rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 42%;
    left: 7.5%;
    transform: translateY(100%, -50%);
    color: white;
  }

  h1{
    margin-left:3rem;
    margin-bottom:1.5rem;
  }
`;

export default SearchBar;
