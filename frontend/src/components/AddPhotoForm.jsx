import React, { useState } from "react";
import closeSymbol from "../assets/closeSymbol.svg";
import "../styles/AddPhotoForm.scss"


const AddPhotoForm = (props) => {
  const [values, setValues] = useState({
    full_url: "",
    regular_url: "",
    city: "",
    country: "",
    topic_id: 1,
  });

  const handleOnChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleOnClickSubmit = () => {
    props.handleNewPhoto(values)
    props.handleCloseModal()
    props.refresh()
  };

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.handleCloseModal()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="AddPhotoForm">
        <h1 className="AddPhotoForm-title">Add a new picture to PhotoLabs!</h1>
      <label htmlFor="full_url">Full Url: </label>
      <input
        type="text"
        name="full_url"
        value={values.full_url}
        onChange={handleOnChange}
      />
      <br />
      <label htmlFor="regular_url">Regular Url: </label>
      <input
        type="text"
        name="regular_url"
        value={values.regular_url}
        onChange={handleOnChange}
      />
      <br />
      <label htmlFor="city">City: </label>
      <input
        type="text"
        name="city"
        value={values.city}
        onChange={handleOnChange}
      />
      <br />
      <label htmlFor="country">Country: </label>
      <input
        type="text"
        name="country"
        value={values.country}
        onChange={handleOnChange}
      />
      <br />
      <label htmlFor="topic_id">Choose a topic:</label>

      <select name="topic_id" onChange={handleOnChange}>
        {props.topics.map((topic) => (
          <option value={topic.id} key={topic.id}>
            {topic.title}
          </option>
        ))}
      </select>
      <br />
      <button onClick={() => handleOnClickSubmit()}>Submit</button>
      </div>
      
    </div>
  );
};

export default AddPhotoForm;
