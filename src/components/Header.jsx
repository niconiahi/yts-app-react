import React from "react";
import styled from "styled-components";

const Header = ({
  criteria,
  quality,
  genre,
  onCriteria,
  onQuality,
  onGenre,
  onSubmit
}) => (
  <Container>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={criteria}
        onChange={e => onCriteria(e.target.value)}
      />
      <select value={quality} onChange={e => onQuality(e.target.value)}>
        <option value="">Both</option>
        <option value="720">720p</option>
        <option value="1080">1080p</option>
      </select>
      <select value={genre} onChange={e => onGenre(e.target.value)}>
        <option value="">All</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="comedy">Comedy</option>
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
