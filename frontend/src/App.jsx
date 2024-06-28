import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, handleDisplayModal, handleOnClickFav } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute listOfFavPhotos={state.listOfFavPhotos} topics ={state.topicData} photos={state.photoData} handleOnClickFav={handleOnClickFav} handleDisplayModal={handleDisplayModal} singlePhotoDetail={state.singlePhotoDetail } />
    </div>
  );
};

export default App;
