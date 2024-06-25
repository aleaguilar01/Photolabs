import { getByDisplayValue } from "@testing-library/react";
import React, { useState, useReducer } from "react";

const HANDLE_ON_CLICK_FAV = 'handleOnClickFav';
const HANDLE_DISPLAY_MODAL = "handleDisplayModa";

const initialState = {
  listOfFavPhotos: [],
  singlePhotoDetail: undefined
}

const reducers = (state, action) => {
  switch (action.type) {
    case HANDLE_ON_CLICK_FAV:
          //validate existence in list
    if (state.listOfFavPhotos.includes(action.photoId)) {
      //if exists remove
      return { ...state, listOfFavPhotos: state.listOfFavPhotos.filter((id) => action.photoId !== id) };
    }
    //if it doesn´t exist add
    return { ...state, listOfFavPhotos: [...state.listOfFavPhotos, action.photoId] }

    case HANDLE_DISPLAY_MODAL:
      if (action.photo) {
        return { ...state, singlePhotoDetail: { ...action.photo } }
      } else {
        return { ...state, singlePhotoDetail: undefined }
      }

    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const handleOnClickFav = (photoId) => {
    dispatch({ type: HANDLE_ON_CLICK_FAV, photoId});
  }

  const handleDisplayModal = (photo) => {
    dispatch({type: HANDLE_DISPLAY_MODAL, photo });
  }

  return {state, handleOnClickFav, handleDisplayModal};
}



export default useApplicationData;