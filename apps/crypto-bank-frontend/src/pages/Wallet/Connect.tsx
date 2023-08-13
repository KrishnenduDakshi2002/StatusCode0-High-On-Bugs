import React, { useEffect } from 'react';

import { useConnect, metamaskWallet, useAddress } from '@thirdweb-dev/react';

import { useAsyncError, useNavigate } from 'react-router-dom';

const metamaskConfig = metamaskWallet();

const Connect = () => {
  const navigate = useNavigate();
  const connect = useConnect();
  const address = useAddress();

  useEffect(() => {
    console.log(address);
    if (address) {
    }
  }, [address]);

  const handleconnectwallet = async () => {
    const wallet = await connect(metamaskConfig);
    console.log(wallet);
    navigate('/home');
  };

  return (
    <div className="w-screen h-screen bg-primary2 flex justify-center items-center">
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
