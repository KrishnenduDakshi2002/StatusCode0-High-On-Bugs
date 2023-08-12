import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Box } from '../../components/HomeComp/Bar1/Bar1';
import Pie from '../../components/Charts/Pie/Pie';

const Home = () => {
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

        <div>
          <FeatherIcon
            icon="moon"
            style={{
              color: 'white',
            }}
          />
        </div>
      </div>
      <div className="flex-2 h-full border-2 border-green">d</div>
      <div className="flex-1 h-full border-2 border-red">
        <div className="py-5 px-3 flex flex-col justify-between items-center border-2 border-black h-full w-full">
          <div className="flex flex-col justify-center items-center border-red-500 border-2">
            <div className="text-text1 font-poppins text-lg">Hello Debayan</div>
            <div className="font-roboto text-lg">Welcome to Peer Link</div>
          </div>

          <div className="flex justify-center items-center py-2 px-2">
            <div className="flex-2">
              <div className="flex justify-between items-center py-2 px-2">
                <button
                  className="font-poppins text-lg py-2 px-2 border-2 border-yellow-600 rounded-md w-[200px]"
                  style={{
                    borderRadius: '30px',
                    background:
                      'linear-gradient(269deg, #06B4B4 0%, #E5317D 100%)',
                  }}
                >
                  Peer to Peer
                </button>
                <button
                  className="font-poppins text-lg py-2 px-2 border-2 border-yellow-600 rounded-md w-[200px]"
                  style={{
                    borderRadius: '30px',
                    background:
                      'linear-gradient(269deg, #06B4B4 0%, #E5317D 100%)',
                  }}
                >
                  Loan Pool
                </button>
              </div>

              <div className="border-2 border-red-400 rounded-md w-[30%]">
                <Pie />
              </div>
            </div>

            <div className="flex-1 border-2 border-red-500 w-[70%]">
              second chart
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
