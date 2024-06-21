import React, { useState } from "react"
import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"
import photos from "mocks/photos";

const HomeRoute = () =>{ 
  
  const [listOfFavPhotos, setListOfFavPhotos] = useState([]);
  
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


  return(
    <div className="ome-route">
      <TopNavigation listOfFavPhotos={listOfFavPhotos}/>
      <PhotoList photos={photos} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos}/>
    </div>
  )
};

export default HomeRoute;