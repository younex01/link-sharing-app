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
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthenticationGuard } from './authentication-guard.tsx';
import PreviewLive from './PreviewLive.tsx';


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
    element: <AuthenticationGuard component={App} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/preview",
    element: <AuthenticationGuard component={Preview} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <AuthenticationGuard component={Profile} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/preview/:id",
    element: <PreviewLive />,
    errorElement: <ErrorPage />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(

  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: 'https://link-sharing-app-ebon.vercel.app/'
    }}
  >
    
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </Auth0Provider>
)
