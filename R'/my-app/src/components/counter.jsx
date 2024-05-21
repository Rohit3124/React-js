import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Conter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBedgeClass()}>{this.formateCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBedgeClass() {
    let classes = "badge m-2 text-bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Conter;
