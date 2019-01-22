import React from 'react';
import { hydrate } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import config from './config'
import configureStore from './store'
import { getAPIClient } from './universal/apiClient';


const store = configureStore(window.__PRELOADED_STATE__);
const client = getAPIClient({initialState: window.__APOLLO_STATE__});
const basePath = config.basePath || '';

hydrate(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter basename={basePath}>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
