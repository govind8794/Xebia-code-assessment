import React, { useState } from "react";
import { TopicsContent } from "./TopicsContent";

export const Topic = ({ data }) => {
  const [showContent, setShowContent] = useState(data.topic.relatedTopics[0]);
  const clickHandler = (value) => {
    setShowContent(data.topic.relatedTopics[value]);
  };

  return (
    <div>
      { data?.topic && data?.topic?.relatedTopics.length> 0 && data?.topic?.relatedTopics?.map((topicName, index) => {
        return (
          <button
            className="ui primary button"
            key={topicName.name}
            onClick={() => clickHandler(index)}
          >
            {topicName.name}
          </button>
        );
      })}
      <TopicsContent content={showContent} />
    </div>
  );
};
