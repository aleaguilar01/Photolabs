import React, { useState } from "react";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import AddPhotoButton from "components/AddPhotoButton";
import AddPhotoForm from "components/AddPhotoForm";

const HomeRoute = (props) => {
  const [displayNewPhotoModal, setDisplayNewPhotoModal] = useState(false);

  return (
    <div className="home-route">
      <TopNavigation
        listOfFavPhotos={props.listOfFavPhotos}
        topics={props.topics}
        handleOnClickTopic={props.handleOnClickTopic}
        handleOnSearch={props.handleOnSearch}
        refresh={props.refresh}
      />
      <PhotoList
        photos={props.photos}
        handleOnClickFav={props.handleOnClickFav}
        listOfFavPhotos={props.listOfFavPhotos}
        handleDisplayModal={props.handleDisplayModal}
      />
      {props.singlePhotoDetail && (
        <PhotoDetailsModal
          handleDisplayModal={props.handleDisplayModal}
          singlePhotoDetail={props.singlePhotoDetail}
          handleOnClickFav={props.handleOnClickFav}
          listOfFavPhotos={props.listOfFavPhotos}
        />
      )}
      <AddPhotoButton onClick={()=> setDisplayNewPhotoModal(true)}/>
      {displayNewPhotoModal && <AddPhotoForm topics={props.topics} handleNewPhoto={props.handleNewPhoto} handleCloseModal={()=> setDisplayNewPhotoModal(false)} refresh={props.refresh}/>} 
    </div>
  );
};

export default HomeRoute;
