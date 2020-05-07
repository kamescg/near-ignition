/* --- Global --- */
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { EthersProvider, ethers } from '@ethers-react/system';
import { ThreeBoxProvider } from '3box-system';

/* --- Local --- */
import theme from '@assets/theme';

/* --- Configuration --- */
import { contracts, extensions } from '@settings/blockchain';
// import createMetaMaskProvider from 'metamask-extension-provider';

// const provider = createMetaMaskProvider();
let providerNetwork = ethers.getDefaultProvider('homestead');

/* --- Component --- */
export default (props) => {
  React.useEffect(() => {
    // provider.sendAsync({
    //   method: 'eth_requestAccounts',
    // });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <EthersProvider
        contracts={contracts}
        extensions={extensions}
        // provider={provider}
      >
        <ThreeBoxProvider>{props.children}</ThreeBoxProvider>
      </EthersProvider>
    </ThemeProvider>
  );
};
