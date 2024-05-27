import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.tsx';
import Preview from './Preview.tsx';
import Profile from './Profile.tsx';
import { store } from './state/store.ts';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';


const client = new ApolloClient({
  uri: 'https://driven-liger-69.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'QADB45y1TPghRC4j4D2lSTJcxfD32gTdSIICU2Sf41OTxQok3oiW8jIF9ohxeefR',
  },
  cache: new InMemoryCache(),
});


const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/preview",
    element: <Preview />
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);
console.log(clientId, domain);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </Auth0Provider>
)
