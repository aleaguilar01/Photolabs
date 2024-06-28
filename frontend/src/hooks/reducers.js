import { ACTIONS } from "constants";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.HANDLE_ON_CLICK_FAV:
      // Check if photo is already in favorites
      if (state.listOfFavPhotos.includes(action.photoId)) {
        // If it is, remove it from favorites
        return {
          ...state,
          listOfFavPhotos: state.listOfFavPhotos.filter(
            (id) => action.photoId !== id
          ),
        };
      }
      // If it's not, add it to favorites
      return {
        ...state,
        listOfFavPhotos: [...state.listOfFavPhotos, action.photoId],
      };

    case ACTIONS.HANDLE_DISPLAY_MODAL:
      if (action.photo) {
        // If a photo is provided, set it as the single photo detail
        return { ...state, singlePhotoDetail: { ...action.photo } };
      } else {
        // If no photo is provided, clear the single photo detail
        return { ...state, singlePhotoDetail: undefined };
      }

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.data };

    case ACTIONS.LOAD_DATA:
      return {
        ...state,
        topicData: action.topicData,
        photoData: action.photoData,
      };

    default:
      // If no action type matches, return the current state
      return state;
  }
};

export default reducers;
