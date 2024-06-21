import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map( (item, key) => <PhotoListItem {...item} key={key}/>)}
    </ul>
  );
};

export default PhotoList;
