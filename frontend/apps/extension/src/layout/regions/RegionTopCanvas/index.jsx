/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */

import DAI from '@assets/images/token/dai.svg';
import USDC from '@assets/images/token/usdc.svg';
import WETH from '@assets/images/token/weth.png';

/* --- Local --- */
import { WalletBalanceContext } from '@ethers-react/ui';
import { WalletTokenBalance } from '@ethers-react/open-finance-erc20';
export default ({ sx }) => (
  <Atom.Flex alignCenter between sx={sx}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Span>
        Ξ <WalletBalanceContext trimmed />
      </Atom.Span>
      <WalletTokenBalance
        contractSelector="Token"
        img={DAI}
        trimmed
        sx={{ ml: 3 }}
      />
      <WalletTokenBalance
        contractSelector="USDC"
        img={USDC}
        trimmed
        decimals={6}
        sx={{ ml: 3 }}
      />
      <WalletTokenBalance
        contractSelector="WETH"
        img={WETH}
        trimmed
        decimals={0}
        sx={{ ml: 3 }}
      />
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/dashboard">
        <Atom.Span>Dashboard</Atom.Span>
      </Molecule.Link>
    </Atom.Flex>
  </Atom.Flex>
);
