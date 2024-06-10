import React, { useState } from "react";
import getMovies from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import _ from "lodash";

const MoviesList = () => {
  const [allMovies, setAllMovies] = useState(getMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
  const genres = [{ _id: "", name: "All Genres" }, ...getGenres];
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const pageSize = 4;
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
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
        />
      </div>

      <div className="col ">
        <p className=" fs-4 fw-medium">
          Showing {filtered.length} movies in the database.
        </p>
        <MoviesTable
          movies={movies}
          sortColumn={sortColumn}
          onDelete={deleteMovie}
          onLike={handleLike}
          onSort={handleSort}
        />
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );

  function deleteMovie(movie) {
    setAllMovies(allMovies.filter((c) => c !== movie));
  }
  function handleLike(movie) {
    const movies = [...allMovies];
    const index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;
    setAllMovies(movies);
  }
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
    setCurrentPage(1);
  }
  function handleSort(sortColumn) {
    setSortColumn(sortColumn);
  }
};

export default MoviesList;
