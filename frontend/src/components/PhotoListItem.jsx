import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";




const PhotoListItem = ({photo, handleOnClickFav, listOfFavPhotos, handleDisplayModal, isModal = false}) => {
   return(
    <div className="photo-list__item">
      <PhotoFavButton id={photo.id} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos} /> 
      <img className={!isModal ? "photo-list__image" : "photo-details-modal__image"} onClick={() => {handleDisplayModal(photo)}} src={photo.urls.full}/>
      <div className={!isModal ? "photo-list__user-details" : "photo-details-modal__photographer-details"}>
        <img className={!isModal ? "photo-list__user-profile" : "photo-details-modal__photographer-profile"} src={photo.user.profile}/>
        <div>
          <p className={!isModal ? "photo-list__user-info" : "photo-details-modal__photographer-info"} >{photo.user.name}</p>
          <p className={!isModal ? "photo-list__user-info photo-list__user-location" : "photo-details-modal__photographer-location photo-details-modal__photographer-info"} onClick={() => {handleDisplayModal(photo)}} src={photo.urls.full} >{photo.location.city + ', ' + photo.location.country}</p>
        </div>
      </div> 
    </div>
  )
};

export default PhotoListItem;
