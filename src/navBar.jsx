import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    const {logIn, onLogOut} = this.props;

    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          <img src='http://localhost:3000/images/badge.png' alt='' width='40' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-item nav-link active' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
            <Link className='nav-item nav-link' to='/addNew'>
              Add New
            </Link>
            {logIn.usename === "" && (
              <React.Fragment>
                <Link className='nav-item nav-link' to='/signIn'>
                  Sign In
                </Link>
                <Link className='nav-item nav-link' to='/reg'>
                  Register
                </Link>
              </React.Fragment>
            )}
            {logIn.usename !== "" && (
              <React.Fragment>
                <Link
                  onClick={() => onLogOut()}
                  className='nav-item nav-link'
                  to='/'>
                  LogOut
                </Link>
                <Link className='nav-item  nav-link' to='/'>
                  <h5>
                    <div className='badge badge-primary'>{logIn.usename}</div>
                  </h5>
                </Link>{" "}
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
