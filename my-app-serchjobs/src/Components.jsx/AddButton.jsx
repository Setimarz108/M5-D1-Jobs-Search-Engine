import React from "react";
import { BiListPlus } from "react-icons/bi";
import {connect } from "react-redux"

 function AddButton() {
  return(
  <>
  <span>
  <button
    style={{
      border: "none",
      backgroundColor: "transparent",
    }}
  >
    <BiListPlus
      style={{
        color: "white",
        width: "50px",
        height: "50px",
        marginLeft: "10px",
      }}
    />
  </button>
</span>
</>
);
}

export default connect()(AddButton)