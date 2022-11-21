import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RestLink } from "apollo-link-rest";

const uri: string = process.env.REACT_APP_API_URI || "";
const key: string = process.env.REACT_APP_API_KEY || "";

const httpLink = new HttpLink({
  uri,
});

const headerLink: ApolloLink = setContext((request) => ({
  headers: {
    "X-Hasura-Access-Key": key,
  },
}));

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([headerLink, httpLink]),
});
