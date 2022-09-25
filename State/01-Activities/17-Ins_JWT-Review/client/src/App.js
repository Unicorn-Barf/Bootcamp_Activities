import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

// Next lines is code to make it so that every single graphql query/mutation
// will automatically set a header called 'authorization' with the toke from localStorage as the value
const httpLink = createHttpLink({
  uri: '/graphql',
});

// config for the pipeline
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// creates the pipeline
const client = new ApolloClient({
  // before the request gets sent to our graphql server
  // authlink will set the header for authorization if there's a token
  // then httpLink will forward the request to the endpoint
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:profileId"
                element={<Profile />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
