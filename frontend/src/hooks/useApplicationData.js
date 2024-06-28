import { getByDisplayValue } from "@testing-library/react";
import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { API_URL } from "constants";

const HANDLE_ON_CLICK_FAV = 'handleOnClickFav';
const HANDLE_DISPLAY_MODAL = "handleDisplayModa";
const SET_PHOTO_DATA = "setPhotoData"
const SET_TOPIC_DATA = "setTopicData"

const initialState = {
  photoData: [],
  topicData: [],
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

      case SET_PHOTO_DATA:
        return {...state, photoData: action.data}

      case SET_TOPIC_DATA:
        return {...state, topicData: action.data}

    default:
      return state;
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    axios.get('/api/photos', { baseURL: API_URL })
      .then(({ data }) => { dispatch({ type: SET_PHOTO_DATA, data}) })
      .catch(new Error('Fail fetching photos.'))

  }, [])

  useEffect(() => {
    axios.get('/api/topics', { baseURL: API_URL })
      .then(({ data }) => { dispatch({ type: SET_TOPIC_DATA, data}) })
      .catch(new Error('Fail fetching topics.'))
  }, [])

  const handleOnClickFav = (photoId) => {
    dispatch({ type: HANDLE_ON_CLICK_FAV, photoId });
  }

  const handleDisplayModal = (photo) => {
    dispatch({ type: HANDLE_DISPLAY_MODAL, photo });
  }
  return { state, handleOnClickFav, handleDisplayModal };
}



export default useApplicationData;