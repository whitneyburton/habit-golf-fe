import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import ApolloClient from 'apollo-boost';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "https://habit-golf-api.herokuapp.com/"
})



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
