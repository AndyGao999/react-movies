import React, {Component} from "react";

class Test extends Component {
  state = {value: ""};
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  // handleSubmit = (event) => {
  //   console.log(this.state.value);

  //   event.preventDefault();
  // };

  render() {
    const {onSubmit2} = this.props;
    return (
      <form onClick={() => onSubmit2(this.state.value)}>
        <label>
          Name:
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Test;
