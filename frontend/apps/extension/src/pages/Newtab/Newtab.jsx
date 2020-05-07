/* --- Global --- */
import { Router } from '@reach/router';
import { WalletAutoConnect } from '@ethers-react/ui';
import React from 'react';
import './Newtab.css';

/* --- Local --- */
import Provider from './providers';
import { Dashboard, Site } from '@routes';

const Newtab = () => {
  return (
    <Provider>
      <>
        <Router>
          <Site path="/*" />
          <Dashboard path="/dashboard/*" />
        </Router>
        <WalletAutoConnect />
      </>
    </Provider>
  );
};

export default Newtab;
