import React from "react";

const ListGroup = (props) => {
  const { listItems, selectedItem, onItemSelect } = props;
  return (
    <ul className="list-group">
      {listItems.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item._id}
          className={
            item._id === selectedItem._id
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
