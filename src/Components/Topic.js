import React, { useState } from "react";
import { TopicsContent } from "./TopicsContent";
import { Button } from "./Button";

export const Topic = ({ data, setTopic }) => {
  const [topicsContent, setTopicsContent] = useState(null);
  const clickHandler = (value) => {
    //setTopic(data.topic.relatedTopics[value].name)
    setTopicsContent(data.topic.relatedTopics[value]);
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
     {topicsContent && <TopicsContent topicsContent={topicsContent} />}
    </>
  );
};
