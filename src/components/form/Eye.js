import React from "react";

const Eye = ({ isEye, onClick }) => {
  return (
    <div>
      <i
        className={`fa-solid ct_input_eye ${!isEye ? "fa-eye-slash" : "fa-eye"}`}
        onClick={() => onClick(!isEye)}
      ></i>
    </div>
  );
};

export default Eye;
