import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { useNavigate } from 'react-router-dom';
import LoanCard from '../LoanCard/LoanCard';

import { useAuth0 } from '@auth0/auth0-react';
import { useDisconnect } from '@thirdweb-dev/react';
import { Link } from 'react-router-dom';

const PeerCom = () => {
  const navigate = useNavigate();

  const { user, isAuthenticated, isLoading } = useAuth0();

  const { logout } = useAuth0();

  const disconnect = useDisconnect();
  // console.log(pathname);

  return (
    <section className="flex justify-center items-center w-screen h-screen bg-main-bg">
      <div className="flex-6 h-full flex justify-between items-center flex-col px-2 py-2 cursor-pointer">
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

      <div className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden ">
        {/* <button className="bg-primary2 font-poppins text-white py-2 px-2 rounded-lg mt-2">
          Apply for loan
        </button> */}
        <Link to="/form">
          <button className="bg-primary2 font-poppins text-white py-2 px-2 rounded-lg mt-2">
            Apply for Loan
          </button>
        </Link>
        <div className="font-poppins text-white font-bold py-3">
          Find the BORROWERS
        </div>
        <div className="w-full flex justify-center items-center ">
          <input
            type="text"
            placeholder="Search for Brrowers"
            className="w-[20rem] py-2 px-3 rounded-lg bg-primary1 text-white border-2 border-white outline-none mb-1"
          />
        </div>
        <div className="w-screen flex flex-wrap justify-start items-center h-full overflow-y-scroll py-2 px-8 gap-2">
          <LoanCard />
          <LoanCard />
          <LoanCard />
          <LoanCard />
          <LoanCard />
        </div>
      </div>
    </section>
  );
};

export default PeerCom;
