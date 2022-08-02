import React from "react";
import { ListOfSubTopics } from "./ListOfSubTopics";
import { StargazersCount } from "./StargazerCount";

export const TopicsContent = ({ topicsContent }) => {
  const { name, stargazerCount, relatedTopics } = topicsContent;
  return (
    <>
      <StargazersCount name={name} stargazerCount={stargazerCount} />
      <ListOfSubTopics relatedTopics={relatedTopics} />
    </>
  );
};
