import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

<<<<<<< HEAD
import { gql } from 'apollo-boost'; //or you can use `import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import App from './App.js';
import './index.css';

const HELLO_QUERY = gql`
  query {
    hello {
      world
    }
  }
`;

const Hello = () => {
  const { loading, data } = useQuery(HELLO_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <div>Loading...</div>;

  const { world } = data.hello;
  return <div>{world}</div>;
};
=======
import './index.css';
import App from './App';
>>>>>>> 244822232106aa11933fad23454bed0e72d1b9e1

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
