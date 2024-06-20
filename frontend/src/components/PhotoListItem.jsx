import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
   return(
    <div className="photo-list__item">
      <PhotoFavButton /> 
      <img className="photo-list__image" src={props.imageSource}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile}/>
        <div>
          <p className="photo-list__user-info" >{props.username}</p>
          <p className="photo-list__user-info photo-list__user-location">{props.location.city + ', ' + props.location.country}</p>
        </div>

      </div> 
    </div>
  )
};

export default PhotoListItem;
