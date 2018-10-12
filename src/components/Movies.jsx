import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Movies = ({ movies, qualitySelected }) => (
  <Container>
    {movies.length > 0 &&
      movies.map(movie => (
        <Movie key={movie.id} movie={movie} qualitySelected={qualitySelected} />
      ))}
  </Container>
);

export default Movies;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
`;
