import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import './styles.css';
import { Auth0Provider } from '@auth0/auth0-react';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-bhhzavj2blhn2cbe.us.auth0.com"
      clientId="c9IrUhDIQiojHPdZsw97IAEbI8X7bn7g"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
