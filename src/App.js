import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar from "./navBar";
import Home from "./home";
import Test from "./test";
import _ from "lodash";
import {getMovies} from "./services/fakeMovieService";
import Reg from "./reg";
import SignIn from "./signIn";
import AddNew from "./addNew";

import "./App.css";
import MovieDetail from "./movieDetail";

class App extends Component {
  state = {
    movies: getMovies(),
    genres: ["All Genres", "Action", "Comedy", "Thriller"],
    currentGenre: "All Genres",
    pageSize: 3,
    currentPage: 1,
    users: [
      {usename: "admin", password: "admin", isAdmin: true},
      {usename: "andy", password: "01gaojie", isAdmin: false},
    ],
    logIn: {usename: "", password: "", isAdmin: false},
    error: {},
  };

  handleDelete = (id) => {
    // const _movies = [...this.state.movies];
    const movies = this.state.movies.filter((m) => m._id !== id);
    // // const pages = _.range(1, movies.length / this.state.pageSize + 1);
    // // if (pages.length < this.state.currentPage)
    // //   this.setState({currentPage: this.state.currentPage - 1});
    // console.log(pages.length, this.state.currentPage);
    this.setState({movies});
  };

  handleCurrentGenre = (genre) => {
    this.setState({currentGenre: genre, currentPage: 1});
  };

  handlePageChange = (currentPage) => {
    this.setState({currentPage});
  };

  paginate = (items, pageNumber, pageSize) => {
    return _(items)
      .slice((pageNumber - 1) * pageSize)
      .take(pageSize)
      .value();
  };

  handleSubmit = (data) => {
    const logIn = {...this.state.logIn};
    const users = [...this.state.users];
    const user = users.filter((u) => u.usename === data.usename);
    console.log(user);
    if (user.length >= 1) {
      if (
        user[0].usename === data.usename &&
        user[0].password === data.password
      ) {
        logIn.usename = data.usename;
        logIn.password = data.password;
        this.setState({logIn});
        console.log(this.props);
        // this.props.history.push("/");
      }
    }
  };

  handleEdit = (data, index) => {
    console.log(index, data.title);
    const movies = [...this.state.movies];

    movies[index].title = data.title;
    movies[index].content = data.content;
    this.setState({movies});
  };

  logOut = () => {
    const logIn = {...this.state.logIn};
    logIn.usename = "";
    logIn.password = "";
    this.setState({logIn});
    console.log("logOut", this.state.logIn);
  };

  handleAddUser = (data) => {
    const _users = [...this.state.users];
    const _data = [data];
    const users = [..._data, ..._users];
    // const users=_users.push(data);
    this.setState({users});
  };

  handleAdd = (movie) => {
    const _movies = [...this.state.movies];
    const _movie = [movie];
    const movies = [..._movie, ..._movies];
    this.setState({movies});
    console.log("addnew movie");
  };

  render() {
    const {currentPage, pageSize, genres, logIn, currentGenre} = this.state;

    const movies = [...this.state.movies];
    const _movies =
      this.state.currentGenre === "All Genres"
        ? movies
        : movies.filter((m) => m.genre.name === this.state.currentGenre);
    const pages = _.range(1, _movies.length / this.state.pageSize + 1);
    if (pages.length < this.state.currentPage)
      this.setState({currentPage: this.state.currentPage - 1});
    const moviesAll = this.paginate(_movies, currentPage, pageSize);

    let counts = _movies.length;
    let condition = counts > 1 ? " movies !" : " movie !";
    let show = " Totally we have " + counts + condition;

    return (
      <div className='container'>
        <NavBar onLogOut={this.logOut} logIn={this.state.logIn} />
        <div className='container p-2'>
          <div className='col container'>
            <Switch>
              <Route
                path='/movieDetail/:id/:index/:type?'
                render={(props) => (
                  <MovieDetail
                    genres={genres}
                    currentGenre={currentGenre}
                    onCurrentGenre={this.handleCurrentGenre}
                    onEdit={this.handleEdit}
                    movies={this.state.movies}
                    {...props}
                  />
                )}
              />

              <Route
                path='/reg'
                render={(props) => (
                  <Reg onAddUser={this.handleAddUser} {...props} />
                )}
              />

              <Route
                path='/signIn'
                render={(props) => (
                  <SignIn onSubmit={this.handleSubmit} {...props} />
                )}
              />
              <Route
                path='/addNew'
                render={(props) => {
                  // <AddNew onAdd={this.handleAdd} {...props} />
                  if (logIn.usename !== "")
                    return <AddNew onAdd={this.handleAdd} {...props} />;
                  return <Redirect to='/signIn' />;
                }}
              />

              <Route
                path='/'
                render={(props) => (
                  <Home
                    show={show}
                    movies={this.state.movies}
                    counts={counts}
                    moviesAll={moviesAll}
                    itemsCounts={counts}
                    pageSize={pageSize}
                    onDelete={this.handleDelete}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                    genres={genres}
                    currentGenre={currentGenre}
                    onCurrentGenre={this.handleCurrentGenre}
                    logIn={logIn}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
