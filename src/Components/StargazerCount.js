import React from "react";

export const StargazersCount = ({ name, stargazerCount }) => {
  return (
    <div className="ui equal width center aligned padded grid">
      <div className="row ">
        <div className="column">
          {name && (
            <h1>
              Stargazers for repository {name} are: {stargazerCount}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
