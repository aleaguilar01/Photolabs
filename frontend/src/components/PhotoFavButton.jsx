import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({id, handleOnClickFav, listOfFavPhotos}) {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(listOfFavPhotos)

  const handleOnClick = () => {
    handleOnClickFav(id)
    setIsFavorite((prev)=> !prev)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleOnClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected ={isFavorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;