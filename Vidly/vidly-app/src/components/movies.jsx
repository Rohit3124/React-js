import React, { Component } from "react";
import getMovies from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class MovieList extends Component {
  state = {
    movies: getMovies,
    pageSize: 4,
    currentPage: 1,
  };

  render() {
    const { movies: allMovies, pageSize, currentPage } = this.state;

    if (allMovies.length === 0)
      return (
        <p className="m-2 fs-4 fw-medium">
          There are no movies in the database.
        </p>
      );
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <>
        <p className="m-2 fs-4 fw-medium">
          Showing {allMovies.length} movies in the database.
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
            {movies.map((movie) => (
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
        <Pagination
          itemsCount={allMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
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
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
}

export default MovieList;
