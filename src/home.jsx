import React, {Component} from "react";
import MovieComponet from "./movieComponet";
import Pagination from "./component/pagination";
import Category from "./category";
class Home extends Component {
  render() {
    const {
      counts,
      show,
      moviesAll,
      movies,
      pageSize,
      onPageChange,
      currentPage,
      onDelete,
      genres,
      onCurrentGenre,
      currentGenre,
      logIn,
    } = this.props;

    return (
      <div className='container '>
        <div className='row'>
          <div className='col-3 list-group'>
            {genres.map((g) => (
              <Category
                key={g}
                currentGenre={currentGenre}
                onCurrentGenre={onCurrentGenre}
                genre={g}
              />
            ))}
          </div>
          <div className='col'>
            {" "}
            <div className='container'>
              <div className='row row-cols-3'>
                <div className='col-9'>{counts > 0 ? show : ""}</div>
                {counts !== 0
                  ? moviesAll.map((m) => (
                      <MovieComponet
                        key={m._id}
                        index={movies.indexOf(m)}
                        logIn={logIn}
                        onDelete={onDelete}
                        m={m}
                      />
                    ))
                  : "No More Movie"}
                <div className='col-9'>
                  <nav aria-label='Page navigation example'>
                    <ul className='pagination'>
                      <Pagination
                        itemsCounts={counts}
                        pageSize={pageSize}
                        onPageChange={onPageChange}
                        currentPage={currentPage}
                      />
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
