import React from 'react';

const LoanCard = () => {
  return (
    <div className="w-[20rem] max-h-max rounded-md py-3 px-2 border-2 border-gray-300">
      <div className="w-full h-5rem">
        <img
          className="object-contain w-full h-full rounded-md"
          src="https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center px-1 py-2">
        <div className="nft-score border-2 border-white py-2 px-2 rounded-full">
          700
        </div>
        <div className="nft-value bg-gradient-to-r from-white to-pink-600 py-2 px-4 rounded-lg">
          Nft Value: 1ETh
        </div>
      </div>

      <div className="flex justify-between py-1 px-2 text-white font-poppins items-center w-full">
        <div className="loan-claimed">Loan Claimed : 2Eth</div>
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="loan-duration">2Years</div>
          <div className="roi bg-yellow-500 py-2 px-4 rounded-lg">18%</div>
        </div>
      </div>

      <div className="flex justify-between items-center py-2 px-3 w-full">
        <div className="py-2 px-7 rounded-lg bg-gradient-to-r from-pink-500 to-white">
          Interested
        </div>
        <div className="py-2 px-7 rounded-lg bg-gradient-to-r from-pink-500 to-white">
          No
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
