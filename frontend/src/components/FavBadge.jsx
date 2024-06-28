import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

// Component that displays FavBadge to signal the existence of favorite photos.
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
