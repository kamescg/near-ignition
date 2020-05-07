import React from 'react';
import './Popup.css';

import Provider from './providers';

// Layout
import RegionHeader from './regions/Header';

const Popup = () => {
  return (
    <Provider>
      <Atom.Flex sx={{ boxShadow: 0, bg: 'white', flex: 1, p: 3, zIndex: 100 }}>
        <RegionHeader />
      </Atom.Flex>
      <Atom.Flex sx={{ height: '100%' }}>
        {/* <Atom.Box sx={{ boxShadow: 1, bg: 'white', flex: 1, p: 3, zIndex: 10 }}>
          Profile
        </Atom.Box> */}
        <Atom.Box sx={{ bg: 'gray', flex: 3, p: 3, textAlign: 'center' }}>
          <Atom.Heading>NEAR Protocol</Atom.Heading>
          <Atom.Heading sx={{ fontSize: [3, 3, 5] }}>Transactions</Atom.Heading>
        </Atom.Box>
      </Atom.Flex>
    </Provider>
  );
};

export default Popup;
