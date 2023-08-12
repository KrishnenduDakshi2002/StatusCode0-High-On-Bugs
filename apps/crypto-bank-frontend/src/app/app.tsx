// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Landing, Home } from '../pages';
import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom';

import './app.scss';

export function App() {
  return (
    <section>
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
