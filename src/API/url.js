import {  createHttpLink } from "@apollo/client";

 export const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });