import React, { useEffect } from 'react';

import { useConnect, metamaskWallet, useAddress } from '@thirdweb-dev/react';

import { useAsyncError, useNavigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import { registerUser } from '../../api/user.auth';

const metamaskConfig = metamaskWallet();

const Connect = () => {
  const navigate = useNavigate();
  const connect = useConnect();
  const address = useAddress();

  const { user, isAuthenticated, isLoading } = useAuth0();

  const regusr = async () => {
    const data = await registerUser(
      user?.email,
      user?.email_verified,
      user?.name,
      user?.picture,
      user?.sub
    );

    console.log(data);
  };

  if (isAuthenticated) {
    console.log(user);
    regusr();
  }

  useEffect(() => {
    console.log(address);
    if (address) {
      navigate('/aadhar');
    }
  }, [address]);

  const handleconnectwallet = async () => {
    const wallet = await connect(metamaskConfig);
    console.log(wallet);
    navigate('/aadhar');
  };

  return (
    <div className="w-screen h-screen bg-main-bg flex justify-center items-center">
      <button
        className="text-md font-Poppins text-text2 py-2 px-3 font-bold tracking-tight cursor-pointer border-2 border-primary1 rounded-md bg-primary2 shadow-lg shadow-gray-800"
        onClick={handleconnectwallet}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default Connect;
