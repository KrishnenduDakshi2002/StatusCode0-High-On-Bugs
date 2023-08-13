import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import './styles.css';
import { Auth0Provider } from '@auth0/auth0-react';

import { BrowserRouter } from 'react-router-dom';

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  rainbowWallet,
  walletConnect,
} from '@thirdweb-dev/react';
import {
  Goerli,
  Sepolia,
  Polygon,
  Mumbai,
  Ethereum,
} from '@thirdweb-dev/chains';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThirdwebProvider
      activeChain={Mumbai}
      dAppMeta={{
        name: 'Thirdweb Prac',
        description: 'Thirdweb Prac',
        url: 'https://thirdweb.dev',
      }}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        rainbowWallet(),
        walletConnect(),
      ]}
      supportedChains={[Goerli, Sepolia, Polygon, Ethereum, Mumbai]}
    >
      <BrowserRouter>
        <Auth0Provider
          domain="dev-bhhzavj2blhn2cbe.us.auth0.com"
          clientId="KWffFBkqgouKo4Junj97AX1qp6dDVLn1"
          authorizationParams={{
            redirect_uri: 'http://localhost:4200/connect',
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </ThirdwebProvider>
  </StrictMode>
);
