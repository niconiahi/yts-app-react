import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <Container>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
`;
