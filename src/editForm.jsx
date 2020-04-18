import React, {Component} from "react";
import Input from "./component/input";
import {Link} from "react-router-dom";

class EditForm extends Component {
  state = {
    title: this.props.title,
    content: this.props.content,
    _id: this.props.id,
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const {img, index, onEdit} = this.props;

    return (
      <div className='col-9'>
        <form>
          <Input
            name='title'
            lable='Title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <div className='text-center'>
            {" "}
            <img src={"http://localhost:3000/" + img} alt='' />
          </div>
          content:
          <textarea
            name='content'
            value={this.state.content}
            onChange={this.handleChange}
            cols='43'
            rows='15'></textarea>
          <Link
            to={
              "/movieDetail/" + this.props.id + "/" + this.props.index + "/show"
            }>
            <h4>
              <div
                onClick={() => onEdit(this.state, index)}
                className='badge badge-primary'>
                Edit{" "}
              </div>
            </h4>
          </Link>{" "}
        </form>
      </div>
    );
  }
}

export default EditForm;
