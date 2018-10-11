import React from "react";
import styled from "styled-components";

const Movie = ({ movie, qualitySelected }) => {
  return (
    <Container>
      <Overlay>
        {movie.title && <h2 className="title">{movie.title}</h2>}
        {movie.year && <span className="year">{movie.year}</span>}
        <p className="imdb">IMDb</p>
        {movie.rating && (
          <span className="rating">{`${movie.rating} / 10`}</span>
        )}
        <ul className="torrents">
          {movie.torrents
            .filter(
              torrent =>
                qualitySelected === "Quality"
                  ? torrent
                  : torrent.quality === qualitySelected
            )
            .map(torrent => (
              <li key={torrent.url} className="torrent">
                <a href={torrent.url}>{torrent.quality}</a>
              </li>
            ))}
        </ul>
      </Overlay>
      {movie.medium_cover_image && (
        <Banner
          className="image"
          src={movie.medium_cover_image}
          alt="Movie banner"
        />
      )}
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

  .imdb {
    position: absolute;
    bottom: 38px;
    left: 4px;
    background: orange;
    color: black;
    padding: 1px 2px;
    border: 1px solid black;
  }

  .rating {
    position: absolute;
    bottom: 28px;
    left: 4px;
    background: orange;
    color: black;
    padding: 1px 2px;
    border: 1px solid black;
  }

  .torrents {
    position: absolute;
    right: 0;
    bottom: 8px;
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
