import React, {Component} from "react";
import Category from "./category";
import EditForm from "./editForm";

class MovieDetail extends Component {
  render() {
    const {currentGenre, onCurrentGenre, genres, onEdit} = this.props;
    const id = this.props.match.params.id;
    const index = this.props.match.params.index;
    const type = this.props.match.params.type;
    const movie = this.props.movies.filter((m) => m._id === id);
    console.log(type);
    // console.log(movies[0]);
    // const title = movies.map((m) => m.title);
    // const img = movies.map((m) => m.img);
    // const publishDate = movies.map((m) => m.publishDate);
    // const content = movies.map((m) => m.content);
    // const content = movies.map((m) => m.content);
    // console.log(movie);

    const show = (
      <div className='col-9  text-center'>
        <h2>{movie[0].title}</h2>
        <p>
          Editor:Admin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date:{" "}
          {movie[0].publishDate}
        </p>
        <img src={"http://localhost:3000/" + movie[0].img} alt='' /> <hr />{" "}
        <br />
        {movie[0].content}
      </div>
    );

    const edit = (
      <div className='col-9'>
        <EditForm
          title={movie[0].title}
          index={index}
          img={movie[0].img}
          onEdit={onEdit}
          content={movie[0].content}
          id={id}
        />
      </div>
    );

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            {genres.map((g) => (
              <Category
                key={g}
                genre={g}
                currentGenre={currentGenre}
                onCurrentGenre={onCurrentGenre}
              />
            ))}
          </div>

          {type !== "edit" ? show : edit}
        </div>
      </div>
    );
  }
}

export default MovieDetail;
