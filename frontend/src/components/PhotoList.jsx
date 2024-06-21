import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ( { photos, handleOnClickFav, listOfFavPhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map( (item) => <PhotoListItem {...item} key={item.id} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos}/>)}
    </ul>
  );
};

export default PhotoList;
