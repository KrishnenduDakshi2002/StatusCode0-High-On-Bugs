import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Com from '../../components/Homepage/Com';
import PeerCom from '../../components/Homepage/PeerCom';

import { useAuth0 } from '@auth0/auth0-react';
import { useDisconnect } from '@thirdweb-dev/react';

const Home = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const { logout } = useAuth0();

  const disconnect = useDisconnect();

  if (isAuthenticated) {
    console.log(user);
  }

  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <section className="flex justify-center items-center w-screen h-screen ">
      <div className="flex-6 h-full flex justify-between items-center flex-col px-2 py-2 bg-primary1">
        <FeatherIcon
          icon="user"
          style={{
            color: 'white',
          }}
        />

        <div className="gap-5 flex flex-col justify-center items-center">
          <FeatherIcon
            icon="home"
            style={{
              color: 'white',
            }}
          />
          <FeatherIcon
            icon="bell"
            style={{
              color: 'white',
            }}
          />
          <FeatherIcon
            icon="book-open"
            style={{
              color: 'white',
            }}
          />
          <FeatherIcon
            icon="phone"
            style={{
              color: 'white',
            }}
          />
        </div>

        <div className="gap-2 flex flex-col justify-center items-center cursor-pointer">
          <FeatherIcon
            icon="log-out"
            style={{
              color: 'white',
            }}
            onClick={() => {
              disconnect();
              logout({ logoutParams: { returnTo: 'http://localhost:4200' } });
            }}
          />
          <FeatherIcon
            icon="moon"
            style={{
              color: 'white',
            }}
          />
        </div>
      </div>
      <Com />
    </section>
  );
};

export default Home;
