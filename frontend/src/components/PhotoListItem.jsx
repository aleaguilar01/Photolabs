import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import TopicList from "./TopicList";



const PhotoListItem = ({urls, user, location, ...rest}) => {
   return(
    <div className="photo-list__item">
      <PhotoFavButton {...rest} /> 
      <img className="photo-list__image" src={urls.full}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}/>
        <div>
          <p className="photo-list__user-info" >{user.name}</p>
          <p className="photo-list__user-info photo-list__user-location">{location.city + ', ' + location.country}</p>
        </div>
      </div> 
    </div>
  )
};

export default PhotoListItem;
