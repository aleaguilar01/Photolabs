import { getByDisplayValue } from "@testing-library/react";
import React, { useState, useReducer } from "react";


const initialState = {
  listOfFavPhotos: [],
  singlePhotoDetail: undefined
}

const reducers = (state, action) => {
  if (action.type === "handleOnClickFav") {
 
    //validate existence in list
    if (state.listOfFavPhotos.includes(action.photoId)) {
      //if exists remove
      return { ...state, listOfFavPhotos: state.listOfFavPhotos.filter((id) => action.photoId !== id) };
    }
    //if it doesn´t exist add
    return { ...state, listOfFavPhotos: [...state.listOfFavPhotos, action.photoId] }
  };

  if (action.type === "handleDisplayModal") {
     
    if (action.photo) {
      return { ...state, singlePhotoDetail: { ...action.photo } }
    } else {
      return { ...state, singlePhotoDetail: undefined }
    }
  }

  if (action.type === "default") {
    return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const handleOnClickFav = (photoId) => {
    dispatch({ type: "handleOnClickFav", photoId});
  }

  const handleDisplayModal = (photo) => {
    dispatch({type:"handleDisplayModal", photo });
  }

  return {state, handleOnClickFav, handleDisplayModal};
}

