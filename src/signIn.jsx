import React, {Component} from "react";

class SingnIn extends Component {
  state = {usename: "", password: ""};

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    this.props.onRest();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const {error, logIn} = this.props;

    // const test = event.target.value;
    // console.log(test);

    return (
      <div className='container w-50'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Usename</label>
            <input
              error={error}
              type='text'
              className='form-control'
              id='usename'
              name='usename'
              aria-describedby='emailHelp'
              value={this.state.usename}
              onChange={this.handleChange}
            />
            {logIn.usename === "" && (
              <React.Fragment>
                {" "}
                <div className='alert-danger'> {error}</div>
              </React.Fragment>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SingnIn;
