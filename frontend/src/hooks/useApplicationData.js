import { getByDisplayValue } from "@testing-library/react";
import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { API_URL } from "constants";
import reducers from "./reducers";
import { ACTIONS } from "constants";

const initialState = {
  photoData: [],
  topicData: [],
  listOfFavPhotos: [],
  singlePhotoDetail: undefined,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducers, initialState);

  // Fetch data when the component mounts
  useEffect(() => {
    const loadPhotoDataPromise = axios.get("/api/photos", { baseURL: API_URL });
    const loadTopicsDataPromise = axios.get("/api/topics", {
      baseURL: API_URL,
    });

    Promise.all([loadPhotoDataPromise, loadTopicsDataPromise])
      .then(([{ data: photoData }, { data: topicData }]) => {
        dispatch({ type: ACTIONS.LOAD_DATA, photoData, topicData });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handle click on a topic
  const handleOnClickTopic = (topicId) => {
    axios
      .get(`/api/topics/photos/${topicId}`, { baseURL: API_URL })
      .then(({ data }) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, data });
      });
  };

  // Handle click on a favorite photo
  const handleOnClickFav = (photoId) => {
    dispatch({ type: ACTIONS.HANDLE_ON_CLICK_FAV, photoId });
  };

  // Handle display of a modal
  const handleDisplayModal = (photo) => {
    dispatch({ type: ACTIONS.HANDLE_DISPLAY_MODAL, photo });
  };
  return { state, handleOnClickFav, handleDisplayModal, handleOnClickTopic };
};

export default useApplicationData;
