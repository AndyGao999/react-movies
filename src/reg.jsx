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

  render() {
    const {data} = this.state;
    const {onAddUser} = this.props;

    return (
      <div className='container w-50'>
        <div>
          <form>
            <Input
              id='usename'
              name='usename'
              value={data.usename}
              type='text'
              lable='UseName'
              onChange={this.handleChange}
              error={this.state.error.usename}
            />
            <Input
              id='password'
              name='password'
              value={data.password}
              type='password'
              lable='Password'
              onChange={this.handleChange}
              error={this.state.error.password}
            />
            <div
              onClick={() => onAddUser(this.state.data)}
              className='form-group'>
              {" "}
              <h3>
                <div className='badge badge-primary'> Submit</div>
              </h3>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Reg;
