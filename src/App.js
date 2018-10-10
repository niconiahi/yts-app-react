import React, { Component } from "react";
import "./App.css";
import yts from "./services/yts";
import Movies from "./components/Movies";
import Header from "./components/Header";
import styled from "styled-components";
import list from "./services/listRaw";

class App extends Component {
  state = {
    movies: [],
    status: "pending",
    criteria: "",
    quality: "",
    qualitySelected: "",
    genre: "",
    rating: 0
  };

  async componentDidMount() {
    try {
      const movies = await yts.list()
      this.setState({ movies, status: 'resolved'})
    } catch (error) {
      this.setState({movies: list, status: 'resolved'})
    }
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

  handleChange = (key, value) => this.setState({ [key]: value })

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
          onCriteria={value => this.handleChange('criteria',value)}
          onQuality={value => this.handleChange('quality',value)}
          onGenre={value => this.handleChange('genre',value)}
          onSubmit={this.handleSubmit}
          onRating={value => this.handleChange('rating',value)}
        />
        <Main>
          {status === "pending" && <p>Loading...</p>}
          {status !== "pending" && movies && (
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
