import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Profile from "./Profile";

import "./App.css";

const client = new ApolloClient({
  uri: "https://www.graphqlhub.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>My First Apollo-App</h1>

      <Profile />
    </ApolloProvider>
  );
}

export default App;
