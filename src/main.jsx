import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { SVApp } from './SVApp';
import './styles.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <SVApp />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
