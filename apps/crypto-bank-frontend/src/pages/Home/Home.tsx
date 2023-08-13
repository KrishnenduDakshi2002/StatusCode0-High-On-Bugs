import React from 'react';
import FeatherIcon from 'feather-icons-react';
import Piechart from '../../components/Charts/Pie/Piechart';
import BarChart from '../../components/Charts/Bar/Bar';

import { useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import Com from '../../components/Homepage/Com';
import PeerCom from '../../components/Homepage/PeerCom';

const Home = () => {
  const navigate = useNavigate();

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

        <div>
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
