import React, {Component} from "react";
import {Link} from "react-router-dom";
// import Input from "./input";
class SingnIn extends Component {
  state = {usename: "", password: ""};

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    // console.log(test);
    // const test = event.target.value;
    // console.log(test);
    return (
      <div className='container w-50'>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Usename</label>
            <input
              type='text'
              class='form-control'
              id='usename'
              name='usename'
              aria-describedby='emailHelp'
              value={this.state.usename}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              class='form-control'
              id='exampleInputPassword1'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-check'></div>
          <h3>
            {" "}
            <Link to='/'>
              {" "}
              <div
                onClick={() => this.props.onSubmit(this.state)}
                className='badge badge-primary'>
                Sign In
              </div>
            </Link>
          </h3>
        </form>
      </div>
    );
  }
}

export default SingnIn;
