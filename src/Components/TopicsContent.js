import React from "react";

export const TopicsContent = ({ content }) => {
  return (
    <div>
      <div className="ui equal width center aligned padded grid">
        <div className="row ">
          <div className="column">
            {content?.name && (
              <h1>
                Stargazers for repository {content?.name} are:{" "}
                {content?.stargazerCount}
              </h1>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="ui list">
          {content &&
            content?.relatedTopics &&
            content?.relatedTopics.length > 0 &&
            content?.relatedTopics.map((data, index) => {
              return (
                <div className="item" key={index}>
                  {index + 1} {"."} {data.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
