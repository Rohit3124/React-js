import React, { Component } from "react";
import getMovies from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import _ from "lodash";
class MovieList extends Component {
  state = {
    movies: getMovies,
    genres: [{ name: "All Genres", _id: "" }, ...getGenres],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    if (allMovies.length === 0)
      return (
        <p className=" fs-4 fw-medium">There are no movies in the database.</p>
      );
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            listItems={genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col ">
          <p className=" fs-4 fw-medium">
            Showing {filtered.length} movies in the database.
          </p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.deleteMovie}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
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
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
}

export default MovieList;
