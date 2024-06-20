import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return(
    <div> 
      <img src={props.sampleDataForPhotoListItem.imageSource}/>       
      <img src={props.sampleDataForPhotoListItem.profile}/>
      <p>{props.sampleDataForPhotoListItem.username}</p>
      <p>{props.sampleDataForPhotoListItem.location.city + ', ' + props.sampleDataForPhotoListItem.location.country}</p>
    </div>
  )
};

export default PhotoListItem;
