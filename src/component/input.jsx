import React from "react";

const Input = ({name, lable, value, error, onChange, type = "text"}) => {
  return (
    <div className='form-group'>
      <label htmlFor='name'>{lable}:</label>
      <input
        id={name}
        name={name}
        value={value}
        autoComplete={name}
        type={type}
        onChange={onChange}
        className='form-control'
      />{" "}
      {error && <div className='alert alert-danger'> {error}</div>}
    </div>
  );
};

export default Input;
