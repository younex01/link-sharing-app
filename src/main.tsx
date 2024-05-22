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


const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
