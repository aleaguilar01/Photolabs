import React, { useState } from "react"
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = (props) =>{ 

  return(
    <div className="home-route">
      <TopNavigation listOfFavPhotos={props.listOfFavPhotos} topics={props.topics} handleOnClickTopic={props.handleOnClickTopic}/>
      <PhotoList photos={props.photos} handleOnClickFav={props.handleOnClickFav} listOfFavPhotos={props.listOfFavPhotos} handleDisplayModal={props.handleDisplayModal} />
      {props.singlePhotoDetail && <PhotoDetailsModal handleDisplayModal={props.handleDisplayModal} singlePhotoDetail={props.singlePhotoDetail} handleOnClickFav={props.handleOnClickFav} listOfFavPhotos={props.listOfFavPhotos}/>}
    </div>
  )
};

export default HomeRoute;