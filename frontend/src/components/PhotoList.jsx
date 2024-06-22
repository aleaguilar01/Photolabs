import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ( { photos, handleOnClickFav, listOfFavPhotos, handleDisplayModal, isModalDisplayed }) => {
  return (
    <ul className="photo-list">
      {photos.map( (item) => <PhotoListItem {...item} key={item.id} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos} handleDisplayModal={handleDisplayModal} isModalDisplayed={isModalDisplayed} />)}
    </ul>
  );
};

export default PhotoList;
