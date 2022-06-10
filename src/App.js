import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { PokemonsContainer } from "./containers/PokemonsContainer";

import './App.scss';

const httpLink = createHttpLink({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
});

function App() {

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main>
          <PokemonsContainer />
        </main>
      </ApolloProvider>
      
    </div>
  );
}

export default App;
