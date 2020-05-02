import React, {Component} from "react";
import Input from "./component/input";

import Joi from "joi-browser";

class AddNew extends Component {
  state = {
    user: {
      _id: Math.floor(Math.random() * 100000000000) + 1000000000,
      title: "",
      genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
      img: "/images/14.jpg",
      numberInStock: 5,
      dailyRentalRate: 4,
      publishDate: "2019-11-03",
      content: "",
    },
    error: "",
  };

  schema = {
    title: Joi.string().alphanum().min(6).max(30).required(),
    numberInStock: Joi.number().integer().max(30).required(),
    content: Joi.string().alphanum().min(6).max(700).required(),
  };

  handleChange = (e) => {
    const user = {...this.state.user};
    user[e.target.name] = e.target.value;
    this.setState({user});
    const obj = {[e.target.name]: e.target.value};
    const schema = {[e.target.name]: this.schema[e.target.name]};
    const error = Joi.validate(obj, schema);
    console.log(error);
    // this.setState({error});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.user);
  };

  render() {
    const {title, img, numberInStock: stock, content} = this.state.user;
    const {error} = this.state;
    return (
      <div className='container w-50'>
        <form onSubmit={this.handleSubmit}>
          <Input
            lable='Title'
            name='title'
            value={title}
            // error={error.details[0].message}
            onChange={this.handleChange}
          />
          <Input
            lable='Photo'
            name='img'
            value={img}
            error={error}
            onChange={this.handleChange}
          />
          <Input
            lable='Stock'
            name='numberInStock'
            value={stock}
            error={error}
            onChange={this.handleChange}
          />
          <label> Content:</label>
          <textarea
            cols='40'
            rows='10'
            lable='Content'
            name='content'
            value={content}
            error={error}
            onChange={this.handleChange}>
            {" "}
          </textarea>
          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddNew;
