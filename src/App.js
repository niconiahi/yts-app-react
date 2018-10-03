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
    genre: ""
  };

  async componentDidMount() {
    this.setState({
      movies: await yts.list(),
      status: "resolved"
    });
  }

  handleSubmit = async e => {
    const { criteria, quality, genre } = this.state;

    e.preventDefault();

    this.setState({ status: "pending" });

    this.setState({
      movies: await yts.search(criteria, quality, genre),
      status: "resolved"
    });
  };

  handleCriteria = criteria => {
    console.log(criteria);
    this.setState({ criteria });
  };

  handleQuality = quality => {
    this.setState({ quality });
  };

  handleGenre = genre => {
    this.setState({ genre });
  };

  render() {
    const { movies, status, criteria, quality, genre } = this.state;

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
        />
        <Main>
          {status === "pending" && <p>Loading...</p>}
          {status !== "pending" && <Movies movies={movies} />}
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
