import React from 'react';
import Piechart from '../Charts/Pie/Piechart';
import BarChart from '../Charts/Bar/Bar';

import { useNavigate } from 'react-router-dom';

const Com = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 h-full">
      <div className="py-2 flex flex-col justify-center items-center h-full w-full bg-primary2">
        <div className="flex flex-col justify-center items-center gap-2 h-[20%] w-full">
          <div className="text-text1 font-poppins text-xl font-semibold">
            Hello Debayan
          </div>
          <div className="font-roboto text-2xl text-text2 font-semibold">
            Welcome to Peer Link
          </div>
        </div>

        <div className="flex justify-center items-center py-2 px-2 w-full h-[80%]">
          <div className="">
            <div className="flex justify-center gap-2 items-center py-2 px-2 ">
              <button
                onClick={() => {
                  navigate('/peer');
                }}
                className="font-poppins text-lg py-2 px-2 rounded-md w-[150px]"
                style={{
                  borderRadius: '30px',
                  background:
                    'linear-gradient(269deg, #06B4B4 0%, #E5317D 100%)',
                }}
              >
                Peer to Peer
              </button>
              <button
                className="font-poppins text-lg py-2 px-2 rounded-md w-[150px]"
                style={{
                  borderRadius: '30px',
                  background:
                    'linear-gradient(269deg, #06B4B4 0%, #E5317D 100%)',
                }}
              >
                Loan Pool
              </button>
            </div>
            <div className="">
              <div className="border-2 border-red-400 rounded-md w-full">
                <Piechart />
              </div>
            </div>
          </div>

          <div className="flex-1 border-2 border-red-500 w-[70%]">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Com;
