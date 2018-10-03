import React from "react";
import styled from "styled-components";

const Movie = ({ movie }) => {
  return (
    <Container>
      <Overlay>
        <h2 className="title">{movie.title}</h2>
        <span className="year">{movie.year}</span>
        <ul className="torrents">
          {movie.torrents.map(torrent => (
            <li key={torrent.hash} className="torrent">
              <a href={torrent.url}>{torrent.quality}</a>
            </li>
          ))}
        </ul>
      </Overlay>
      <Banner
        className="image"
        src={movie.medium_cover_image}
        alt="Movie banner"
      />
    </Container>
  );
};

export default Movie;

const Container = styled.article`
  position: relative;
  max-width: 230px;
  max-height: 345px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .title {
    background: yellow;
    color: black;
    margin-left: 2px;
    border: 1px solid black;
  }

  .torrents {
    position: absolute;
    right: 0;
    color: black;
    font-size: 16px;
    list-style: none;
    padding: 0;

    .torrent {
      padding: 4px;
      background-color: yellow;
      margin-bottom: 4px;
      border: 1px solid black;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }

  .year {
    position: absolute;
    bottom: 4px;
    right: 1px;
    color: black;
    width: 97%;
    background: yellow;
    border: 1px solid black;
  }
`;

const Banner = styled.img`
  border: 1px solid black;
`;
