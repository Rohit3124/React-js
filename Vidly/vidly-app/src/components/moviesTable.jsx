import React from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";
import TableBody from "./common/tableBody";

const MoviesTable = (props) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.like} onClick={() => props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => props.onDelete(movie)}
          className="btn btn-danger btn"
        >
          Delete
        </button>
      ),
    },
  ];
  const { movies, onSort, sortColumn } = props;
  return (
    <table className="table  ">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={movies} columns={columns} />
    </table>
  );
};

export default MoviesTable;
