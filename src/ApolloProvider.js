import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import Index from "./jsx";
import { AuthProvider, AuthContext } from "./context-auth/auth";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql", //'https://mdt-bk.herokuapp.com/graphql',
  // uri: 'https://mdt-bk.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <BrowserRouter basename="/react/demo">
          <ThemeContext>
            <Index />
          </ThemeContext>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
