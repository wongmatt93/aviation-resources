import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "https://graphql.aviationresources.io/v1/graphql",
});

const headerLink: ApolloLink = setContext((request) => ({
  headers: {
    "X-Hasura-Access-Key": "bmcda7kbqtih8c8se",
  },
}));

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([headerLink, httpLink]),
});
