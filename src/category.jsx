import React, {Component} from "react";
import {Link} from "react-router-dom";

class Category extends Component {
  render() {
    const {genre, currentGenre, onCurrentGenre} = this.props;
    return (
      <Link
        to='/'
        onClick={() => onCurrentGenre(genre)}
        className={
          genre === currentGenre
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action "
        }>
        {genre}
      </Link>
    );
  }
}

export default Category;
