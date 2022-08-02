import React from "react";

export const ListOfSubTopics = ({ relatedTopics }) => {
  return (
    <div className="ui list">
      {relatedTopics.map((data, index) => {
        return (
          <div className="item" key={index}>
            {index + 1} {"."} {data.name}
          </div>
        );
      })}
    </div>
  );
};
