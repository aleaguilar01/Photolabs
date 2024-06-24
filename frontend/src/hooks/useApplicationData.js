import React, { useState } from "react";

const useApplicationData = () => {

  const [state, setState] = useState(
    {listOfFavPhotos:[],
      singlePhotoDetail: undefined
    }
  );


    /**
   * 
   * @param {*} photoId 
   * @returns List of Fav Photos
   */
  const handleOnClickFav = (photoId) => setState((prev) => {
    //validate existence in list
    if (prev.listOfFavPhotos.includes(photoId)) {
       //if exists remove
      return {...prev, listOfFavPhotos: prev.listOfFavPhotos.filter((id) => photoId !== id)};
    } 
    //if it doesn´t exist add
    return {...prev, listOfFavPhotos: [...prev.listOfFavPhotos, photoId]} 
  });

    /**
   * handles the display of a modal and captures the data of the picture clicked. 
   * Also handles the close modal. 
   */
    const handleDisplayModal = (photo) => {
      if(photo){
        setState(prev=> ({...prev, singlePhotoDetail: {...photo}}))
      } else {
        setState(prev=> ({...prev, singlePhotoDetail: undefined}))
      }
      
    }

  return {
    state,
    handleOnClickFav,
    handleDisplayModal,
  }
}

export default useApplicationData;