import React, {Component} from "react";
import {Link} from "react-router-dom";

class MovieComponent extends Component {
  render() {
    const {
      title,
      img,
      dailyRentalRate,

      numberInStock,
      genre,
      _id,
    } = this.props.m;

    const {logIn} = this.props;

    // const index = this.props.movies.indexOf(this.props.m);

    return (
      <div className='col p-1 border-bottom'>
        <Link to={"/movieDetail/" + _id + "/" + this.props.index + "/show"}>
          <img src={"http://localhost:3000/" + img} alt='' />
        </Link>
        <span> Title:{title}</span> |<span>{genre.name}</span> |
        <span>Rates:{dailyRentalRate}</span>|<span>Stock:{numberInStock}</span>|
        {logIn.usename !== "" && (
          <React.Fragment>
            {" "}
            <Link to={"/movieDetail/" + _id + "/" + this.props.index + "/edit"}>
              <button className='btn btn-primary btn-sm m-2'> Edit</button>
            </Link>
            <button
              className='btn btn-danger btn-sm'
              onClick={() => this.props.onDelete(_id)}>
              Delete
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default MovieComponent;
