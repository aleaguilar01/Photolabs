import React, { useState } from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleOnClick = () => {
  setIsClicked(true)
};

  return (
    <div className={"topic-list__item"}>
      <span className={isClicked ? "--clicked" : ""} onClick={handleOnClick}>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
