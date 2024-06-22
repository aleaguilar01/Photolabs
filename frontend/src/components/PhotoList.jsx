import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ( { photos, handleOnClickFav, listOfFavPhotos, handleDisplayModal }) => {
  return (
    <ul className="photo-list">
      {photos.map( (photo) => <PhotoListItem photo={photo} key={photo.id} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos} handleDisplayModal={handleDisplayModal} />)}
    </ul>
  );
};

export default PhotoList;
