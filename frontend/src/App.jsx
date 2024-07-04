import React from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const { state, handleDisplayModal, handleOnClickFav, handleOnClickTopic, handleOnSearch, refresh } =
    useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        listOfFavPhotos={state.listOfFavPhotos}
        topics={state.topicData}
        photos={state.photoData}
        handleOnClickFav={handleOnClickFav}
        handleDisplayModal={handleDisplayModal}
        handleOnClickTopic={handleOnClickTopic}
        singlePhotoDetail={state.singlePhotoDetail}
        handleOnSearch ={handleOnSearch}
        refresh={refresh}
      />
    </div>
  );
};

export default App;
