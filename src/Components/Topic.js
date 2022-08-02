import React, { useState } from "react";
import { TopicsContent } from "./TopicsContent";
import { Button } from "./Button";

export const Topic = ({ data, setTopic }) => {
  const [showContent, setShowContent] = useState(null);
  const clickHandler = (value) => {
    //setTopic(data.topic.relatedTopics[value].name)
    setShowContent(data.topic.relatedTopics[value]);
  };

  return (
    <>
    <div className="topic-btn">
    {data?.topic?.relatedTopics?.map((topicName, index) => {
        return (
          <Button  className={'ui primary button'} topicName ={topicName.name} clickHandler={() => clickHandler(index)} key={index} />
        );
      })}
    </div>
     {showContent && <TopicsContent content={showContent} />}
    </>
  );
};
