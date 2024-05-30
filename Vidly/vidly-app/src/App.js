import React, { Component } from "react";
import movies from "./services/fakeMovieService";

class Vidly extends Component {
  state = {
    movies: movies,
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
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
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
}

export default Vidly;
