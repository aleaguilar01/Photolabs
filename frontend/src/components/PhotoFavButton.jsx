import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

// Component that displays a like button on each photo.
function PhotoFavButton({ id, handleOnClickFav, listOfFavPhotos }) {
  const handleOnClick = () => {
    handleOnClickFav(id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleOnClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={listOfFavPhotos.includes(id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
