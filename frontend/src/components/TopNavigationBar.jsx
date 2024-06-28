import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

//Component to display the NavBar.
const TopNavigation = (props) => {
  const favListLenght = props.listOfFavPhotos.length;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        handleOnClickTopic={props.handleOnClickTopic}
      />
      <FavBadge isFavPhotoExist={favListLenght > 0} />
    </div>
  );
};

export default TopNavigation;
