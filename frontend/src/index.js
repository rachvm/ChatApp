import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App/App.js';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './components/Auth/login';
import LogoutButton from './components/Auth/logout';
import Profile from './components/Auth/profile';

const Domain = process.env.REACT_APP_AUTH0_DOMAIN
const ClientID = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Auth0Provider
    domain={Domain}
    clientId={ClientID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: `https://${Domain}/api/v2/`,
      scope: "read:current_user update:current_user_metadata"
    }}
  >   
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
      <App />
      
    </Auth0Provider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
