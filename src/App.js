import React, { Component } from "react";
import "./App.css";
import yts from "./services/yts";
import Movies from "./components/Movies";
import Header from "./components/Header";
import styled from "styled-components";

class App extends Component {
  state = {
    movies: [],
    status: "pending",
    criteria: "",
    quality: "",
    qualitySelected: "Quality",
    genre: "",
    rating: 0
  };

  async componentDidMount() {
    this.setState({
      movies: await yts.list(),
      status: "resolved"
    });
  }

  handleSubmit = async e => {
    const { criteria, quality, genre, rating } = this.state;

    e.preventDefault();

    this.setState({ status: "pending" });

    this.setState({
      qualitySelected: quality,
      movies: await yts.search(criteria, quality, genre, rating),
      status: "resolved"
    });
  };

  handleCriteria = criteria => {
    this.setState({ criteria });
  };

  handleRating = rating => {
    this.setState({ rating });
  };

  handleQuality = quality => {
    this.setState({ quality });
  };

  handleGenre = genre => {
    this.setState({ genre });
  };

  render() {
    const {
      movies,
      status,
      criteria,
      quality,
      genre,
      qualitySelected
    } = this.state;

    return (
      <div className="App">
        <Header
          criteria={criteria}
          quality={quality}
          genre={genre}
          onCriteria={this.handleCriteria}
          onQuality={this.handleQuality}
          onGenre={this.handleGenre}
          onSubmit={this.handleSubmit}
          onRating={this.handleRating}
        />
        <Main>
          {status === "pending" && <p>Loading...</p>}
          {status !== "pending" && (
            <Movies movies={movies} qualitySelected={qualitySelected} />
          )}
        </Main>
      </div>
    );
  }
}

export default App;

const Main = styled.main`
  padding: 12px;
  margin-top: 12px;
  height: 100%;
`;
