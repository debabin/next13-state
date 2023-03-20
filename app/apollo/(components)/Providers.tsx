"use client";

import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default function Providers({ children }: any) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
