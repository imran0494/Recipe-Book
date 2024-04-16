import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [result, setResult] = useState([]);
  let params = useParams();

  useEffect(() => {
    getResults(params.search);
  }, [params.search]);

  const getResults = async (queryFor) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_MY_KEY}&number=20&query=${queryFor}`
      );
      const data = await response.json();
      setResult(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Grid>
      {result.map((item) => (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4 style={{ textDecoration: "none", color: "black" }}>
              {item.title}
            </h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
