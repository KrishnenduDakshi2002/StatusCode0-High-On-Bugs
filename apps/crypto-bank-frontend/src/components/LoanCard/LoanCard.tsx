import React from 'react';

const LoanCard = () => {
  return (
    <div className="w-[20rem] max-h-max rounded-md py-3 px-2 border-2 border-gray-300">
      <div className="w-full h-5rem">
        <img
          className="object-contain w-full h-full rounded-md"
          src="https://generation-sessions.s3.amazonaws.com/d362e5210c5fef43a9bc1f7e0d8d558c/img/rectangle-16.png"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center px-1 py-2">
        <div className="nft-score">700</div>
        <div className="nft-value">Nft Value: 1ETh</div>
      </div>

      <div>
        <div className="loan-claimed"></div>
        <div>
          <div className="loan-duration"></div>
          <div className="roi"></div>
        </div>
      </div>

      <div>
        <div>Interested</div>
        <div>No</div>
      </div>
    </div>
  );
};

export default LoanCard;
