/* --- Global --- */
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { EthersProvider } from '@ethers-react/system';

/* --- Local --- */
import theme from '@assets/theme';

/* --- Configuration --- */
import { contracts, extensions } from '@settings/blockchain';
import createMetaMaskProvider from 'metamask-extension-provider';
const provider = createMetaMaskProvider();

/* --- Component --- */
export default (props) => {
  // console.log(provider, 'provider');
  // React.useEffect(() => {
  //   provider.enable();
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <EthersProvider contracts={contracts} extensions={extensions}>
        {props.children}
      </EthersProvider>
    </ThemeProvider>
  );
};
