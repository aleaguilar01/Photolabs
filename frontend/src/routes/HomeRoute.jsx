import React, { useState } from "react"
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = () =>{ 
  
  const [listOfFavPhotos, setListOfFavPhotos] = useState([]);
  const [ isModalDisplayed, setIsModalDisplayed ] = useState(false);
  const [ singlePhotoDetail, setSinglePhotoDetail ] = useState(undefined);

  /**
   * 
   * @param {*} photoId 
   * @returns List of Fav Photos
   */
  const handleOnClickFav = (photoId) => setListOfFavPhotos((prev) => {
    //validate existence in list
    if (prev.includes(photoId)) {
       //if exists remove
      return prev.filter((id) => photoId !== id);
    } 
    //if it doesn´t exist add
    return [...prev, photoId] 
  });

  
  /**
   * handles the display of a modal and captures the id of the picture clicked. 
   */
  const handleDisplayModal = (photo) => {
    setIsModalDisplayed(prev => !prev);
    if(photo){
      setSinglePhotoDetail(prev =>({...photo}))
    } else {
      setSinglePhotoDetail(undefined)
    }
    
  }


  return(
    <div className="home-route">
      <TopNavigation listOfFavPhotos={listOfFavPhotos}/>
      <PhotoList photos={photos} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos} handleDisplayModal={handleDisplayModal} />
      {singlePhotoDetail && <PhotoDetailsModal handleDisplayModal={handleDisplayModal} singlePhotoDetail={singlePhotoDetail} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos}/>}
    </div>
  )
};

export default HomeRoute;