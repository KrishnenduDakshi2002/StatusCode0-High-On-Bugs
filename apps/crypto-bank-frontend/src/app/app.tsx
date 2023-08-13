// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Landing, Home } from '../pages';
import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom';

import './app.scss';
import Peer from '../pages/Peer/Peer';
import Connect from '../pages/Wallet/Connect';
import PeerCom from '../components/Homepage/PeerCom';

export function App() {
  return (
    <section>
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/peer" element={<PeerCom />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </section>
  );
}

export default App;
