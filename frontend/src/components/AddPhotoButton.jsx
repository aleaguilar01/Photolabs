import React from "react";
import AddPhotoIcon from "./AddPhotoIcon";
import "../styles/AddPhotoForm.scss"

const AddPhotoButton = (props) => {
  return (
    <button className="AddPhotoForm-button" onClick={props.onClick}> 
      <AddPhotoIcon />
    </button>
  );
};

export default AddPhotoButton