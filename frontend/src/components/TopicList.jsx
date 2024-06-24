import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic)=> <TopicListItem {...topic} key={topic.id}/> )}
    </div>
  );
};

export default TopicList;
