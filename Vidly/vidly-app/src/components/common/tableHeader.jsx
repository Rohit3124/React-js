import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableHeader = (props) => {
  function raiseSort(path) {
    if (path) {
      const sortColumn = { ...props.sortColumn };
      if (sortColumn.path === path)
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      else {
        sortColumn.path = path;
        sortColumn.order = "asc";
      }
      props.onSort(sortColumn);
    }
  }
  function renderSortIcon(column) {
    const { sortColumn } = props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <FontAwesomeIcon icon="fa-solid fa-sort-up" />;
    return <FontAwesomeIcon icon="fa-solid fa-sort-down" />;
  }
  return (
    <thead>
      <tr>
        {props.columns.map((column) => (
          <th
            className="clickable "
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
