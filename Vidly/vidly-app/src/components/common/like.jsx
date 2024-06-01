import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = (props) => {
  let classes = "fa-heart fa-";
  if (!props.liked) classes += "regular";
  return (
    <FontAwesomeIcon
      icon={classes}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
