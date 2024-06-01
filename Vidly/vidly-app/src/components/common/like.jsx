import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Like extends Component {
  render() {
    let classes = "fa-heart fa-";
    if (!this.props.liked) classes += "regular";
    return (
      <FontAwesomeIcon
        icon={classes}
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Like;
