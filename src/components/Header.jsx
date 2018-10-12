import React from "react";
import styled from "styled-components";

const Header = ({
  criteria,
  quality,
  genre,
  rating,
  onCriteria,
  onQuality,
  onGenre,
  onSubmit,
  onRating
}) => (
  <header>
    <Container onSubmit={onSubmit}>
      <input
        className="text-input"
        type="text"
        value={criteria}
        onChange={e => onCriteria(e.target.value)}
      />
      <select
        value={quality}
        className="sel1"
        onChange={e => onQuality(e.target.value)}
      >
        <option value="Quality">Quality</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
        <option value="3D">3D</option>
      </select>
      <select
        value={genre}
        className="sel2"
        onChange={e => onGenre(e.target.value)}
      >
        <option value="">Genre</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="comedy">Comedy</option>
      </select>
      <select
        value={rating}
        className="sel3"
        onChange={e => onRating(e.target.value)}
      >
        <option value="">Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button className="search-btn">Buscar</button>
    </Container>
  </header>
);

const Container = styled.form`
  display: grid;
  grid-template-columns: 5% repeat(3, 1fr) 5%;
  grid-template-row: 10% repeat(3, 1fr) 10%;
  background-color: black;
  padding: 1rem;
  border: 0.15em dashed yellow;
  align-items: center;
  grid-gap: 4px;

  .text-input {
    grid-row: 1 / 2;
    grid-column: 2 / 5;
  }

  .sel1 {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  .sel2 {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
  }

  .sel3 {
    grid-row: 2 / 3;
    grid-column: 4 / 5;
  }

  .search-btn {
    grid-row: 3 / 4;
    grid-column: 2 / 5;
  }

  @media (min-width: 425px) {
  }
`;

export default Header;
