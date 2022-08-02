import React from "react";
import { ListOfSubTopics } from "./ListOfSubTopics";
import { StargazersCount } from "./StargazerCount";

export const TopicsContent = ({ content }) => {
  const { name, stargazerCount, relatedTopics } = content;
  return (
    <>
      <StargazersCount name={name} stargazerCount={stargazerCount} />
      <ListOfSubTopics relatedTopics={relatedTopics} />
    </>
  );
};
