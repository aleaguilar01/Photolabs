import { getByDisplayValue } from "@testing-library/react";
import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { API_URL } from "constants";

// Action types
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
      // Check if photo is already in favorites
      if (state.listOfFavPhotos.includes(action.photoId)) {
        // If it is, remove it from favorites
        return { ...state, listOfFavPhotos: state.listOfFavPhotos.filter((id) => action.photoId !== id) };
      }
      // If it's not, add it to favorites
      return { ...state, listOfFavPhotos: [...state.listOfFavPhotos, action.photoId] }

    case HANDLE_DISPLAY_MODAL:
      if (action.photo) {
        // If a photo is provided, set it as the single photo detail
        return { ...state, singlePhotoDetail: { ...action.photo } }
      } else {
        // If no photo is provided, clear the single photo detail
        return { ...state, singlePhotoDetail: undefined }
      }

      case SET_PHOTO_DATA:
        return {...state, photoData: action.data}

      case SET_TOPIC_DATA:
        return {...state, topicData: action.data}

    default:
      // If no action type matches, return the current state
      return state;
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducers, initialState);

  // Fetch photo data when the component mounts
  useEffect(() => {
    axios.get('/api/photos', { baseURL: API_URL })
      .then(({ data }) => { dispatch({ type: SET_PHOTO_DATA, data}) })
      .catch(()=> {throw new Error('Fail fetching photos.')})

  }, [])
  // Fetch topic data when the component mounts
  useEffect(() => {
    axios.get('/api/topics', { baseURL: API_URL })
      .then(({ data }) => { dispatch({ type: SET_TOPIC_DATA, data}) })
      .catch(() => {new Error('Fail fetching topics.')})
  }, [])

  // Handle click on a topic
  const handleOnClickTopic = (topicId) => {
    axios.get(`/api/topics/photos/${topicId}`, {baseURL: API_URL})
    .then(({ data }) => { dispatch({ type: SET_PHOTO_DATA, data}) })
  }

  // Handle click on a favorite photo
  const handleOnClickFav = (photoId) => {
    dispatch({ type: HANDLE_ON_CLICK_FAV, photoId });
  }

  // Handle display of a modal
  const handleDisplayModal = (photo) => {
    dispatch({ type: HANDLE_DISPLAY_MODAL, photo });
  }
  return { state, handleOnClickFav, handleDisplayModal, handleOnClickTopic };
}



export default useApplicationData;