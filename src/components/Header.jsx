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
  <Container>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={criteria}
        onChange={e => onCriteria(e.target.value)}
      />
      <select value={quality} onChange={e => onQuality(e.target.value)}>
        <option value="Quality">Quality</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
        <option value="3D">3D</option>
      </select>
      <select value={genre} onChange={e => onGenre(e.target.value)}>
        <option value="">Genre</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="comedy">Comedy</option>
      </select>
      <select value={rating} onChange={e => onRating(e.target.value)}>
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
      <button>Buscar</button>
    </form>
  </Container>
);

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 32px 0;
  border: 0.15em dashed yellow;

  form {
    margin-left: 12px;
  }

  input,
  button,
  select {
    font-size: 20px;

    &:not(:first-child) {
      margin-left: 6px;
    }
  }
`;

export default Header;
