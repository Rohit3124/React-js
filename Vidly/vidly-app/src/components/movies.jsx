import React, { Component } from "react";
import getMovies from "../services/fakeMovieService";
import Like from "./common/like";

class MovieList extends Component {
  state = {
    movies: getMovies,
  };

  render() {
    const { movies } = this.state;
    if (movies.length === 0)
      return (
        <p className="m-2 fs-4 fw-medium">
          There are no movies in the database.
        </p>
      );
    return (
      <>
        <p className="m-2 fs-4 fw-medium">
          Showing {movies.length} movies in the database.
        </p>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <th>
                  <Like
                    liked={movie.like}
                    onClick={() => this.handleLike(movie)}
                  />
                </th>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie)}
                    className="btn btn-danger btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  deleteMovie = (movie) => {
    const movies = this.state.movies.filter((c) => c !== movie);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };
}

export default MovieList;
