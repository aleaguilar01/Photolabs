import React, { useState } from "react"
import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"
import photos from "mocks/photos";

const HomeRoute = () =>{ 
  
  const [listOfFavPhotos, setListOfFavPhotos] = useState([]);
  const [ isModalDisplayed, setIsModalDisplayed ] = useState(false);

  /**
   * 
   * @param {*} photoId 
   * @returns List of Fav Photos
   */
  const handleOnClickFav = (photoId) => setListOfFavPhotos((prev) => {
    //validate existence in list
    if (prev.includes(photoId)) {
      return prev.filter((id) => photoId !== id);
    } 
    //if exists remove
    return [...prev, photoId]
    //if it doesn´t exist add
  });

  
  /**
   * handles the display of a modal and captures the id of the picture clicked. 
   */
  const handleDisplayModal = () => {
    setIsModalDisplayed(true)
    const selectedPhotoId = photos.id;
  }

  return(
    <div className="home-route">
      <TopNavigation listOfFavPhotos={listOfFavPhotos}/>
      <PhotoList photos={photos} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos} handleDisplayModal={handleDisplayModal} isModalDisplayed={isModalDisplayed}/>
    </div>
  )
};

export default HomeRoute;