import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

//Component that displays the topic list in the navbar. 
const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic)=> <TopicListItem {...topic} key={topic.id} handleOnClickTopic={props.handleOnClickTopic}/> )}
    </div>
  );
};

export default TopicList;
