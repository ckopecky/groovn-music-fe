import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost'; //or you can use `import gql from 'graphql-tag';
import { render } from 'react-dom';
import { useQuery } from '@apollo/react-hooks';

import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({ // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
});

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
    return (
  <div>{ world }</div>
  );
};

  const App = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>Connecting FE to BE!</h2>
            <Hello></Hello>
        </div>
    </ApolloProvider>
);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
