import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_MY_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <StyledImage src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <Content>
          {activeTab === "instructions" && (
            <Instructions>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </Instructions>
          )}
          {activeTab === "ingredients" && (
            <Ingredients>
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    <p>{ingredient.original}</p>
                  </li>
                ))}
              </ul>
            </Ingredients>
          )}
        </Content>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-left:3rem;
  }
`;

const StyledImage = styled.img`
margin-top:2rem;
  width: 18rem;
  height: 15rem;
  border-radius: 0.5rem;
  border:1px solid grey;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: ${(props) => (props.active ? "white" : "#313131")};
  background: ${(props) => (props.active ? "#313131" : "white")};
  border: 2px solid black;
  border-radius: 1rem;
  margin-right: 2rem;
  font-weight: 600;
  &:hover {
    background: ${(props) => (props.active ? "#494949" : "#e0e0e0")};
    color: ${(props) => (props.active ? "white" : "#313131")};
  }
`;

const Info = styled.div`
  margin-left: 10rem;
`;

const Content = styled.div`
  margin-top: 2rem;
`;

const Instructions = styled.div`
  p {
    margin-bottom: 2rem;
  }
  height: 30rem;
  width: 40rem;
`;

const Ingredients = styled.div`
  ul {
    margin-top: 2rem;
    li {
      font-size: 1.2rem;
      line-height: 2.5rem;
    }
  }
`;


export default Recipe;
