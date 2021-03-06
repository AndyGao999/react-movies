import React, {Component} from "react";
import Input from "./component/input";
import Joi from "joi-browser";

class Reg extends Component {
  state = {
    data: {usename: "", password: "", isAdmin: false},
    error: {usename: "", password: ""},
  };

  schema = {
    usename: Joi.string().alphanum().min(6).max(30).required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
  };

  // validate = () => {
  //   const error = Joi.validate(this.state.data, this.schema, {
  //     abortEarly: false,
  //   });
  //   this.setState({error});
  //   console.log("jjjj", this.state.error);
  // };

  handleChange = (e) => {
    // console.log(this.schema, e.target.name, e.target.value);
    const data = {...this.state.data};
    data[e.target.name] = e.target.value;
    const obj = {[e.target.name]: e.target.value};
    const schema = {[e.target.name]: this.schema[e.target.name]};
    const {error} = Joi.validate(obj, schema);
    const erro = Joi.validate(obj, schema);
    const _error = {...this.state.error};
    _error[e.target.name] = error !== null ? error.details[0].message : "";
    this.setState({data, error: _error});
    console.log(erro, erro.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddUser(this.state.data);
  };

  render() {
    const {data} = this.state;

    return (
      <div className='container w-50'>
        <div>
          <form onSubmit={this.handleSubmit}>
            <Input
              id='usename'
              name='usename'
              value={data.usename}
              type='text'
              autoComplete='username'
              lable='UseName'
              onChange={this.handleChange}
              error={this.state.error.usename}
            />
            <Input
              id='password'
              name='password'
              autoComplete='current-password'
              value={data.password}
              type='password'
              lable='Password'
              onChange={this.handleChange}
              error={this.state.error.password}
            />
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Reg;
