import React from "react";

const Input = ({
  value,
  onChange,
  type = "text",
  className = "",
  placeholder = "",
  isClassName = false,
  isPlaceHolder = false,
  ...props
}) => {
  return (
    <input
      type={type}
      className={
        isClassName ? className : `form-control ct_custom_input ${className}`
      }
      placeholder={
        isPlaceHolder == true ? placeholder : `Please enter ${placeholder}`
      }
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
