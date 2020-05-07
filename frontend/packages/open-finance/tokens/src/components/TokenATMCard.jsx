/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks, utils } from "@ethers-react/system";

/* --- TokenATMCard : Component --- */
export const TokenATMCard = ({
  address,
  contractName,
  name,
  symbol,
  icon,
  sx,
  sxCard,
  sxIcon,
  sxIconWrapper,
  ...props
}) => {
  /* ------------------- */
  // State
  /* ------------------- */
  /* --- Local : State --- */
  const [balance, setBalance] = useState();
  const [init, setInit] = useState(false);

  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead();

  /* ------------------- */
  // Effets
  /* ------------------- */
  /* --- Select Contract : Effect --- */
  useEffect(() => {
    setInit(true);
    contractRead.read({
      contractName,
      func: "balanceOf",
      inputs: [address]
    });
  }, [address]);

  useEffect(() => {
    if (contractRead.data)
      setBalance(utils.formatEther(contractRead.data.toString()));
  }, [contractRead]);

  useEffect(() => {});
  return (
    <Atom.Flex column between sx={sxCard}>
      {/* Top : Region */}
      <Atom.Flex between sx={{ flex: 1 }}>
        {/* Left : Area */}
        <Atom.Flex alignCenter sx={{ alignSelf: "flex-start", flex: 1 }}>
          <Atom.Span>
            <Atom.Flex center column sx={sxIconWrapper}>
              <Atom.Span>
                <Atom.Image src={icon} sx={sxIcon} />
              </Atom.Span>
            </Atom.Flex>
          </Atom.Span>
          <Atom.Span sx={{ ml: 2 }}>{name}</Atom.Span>
        </Atom.Flex>
        {/* Right : Area */}
        <Atom.Span>{symbol}</Atom.Span>
      </Atom.Flex>

      {/* Top : Region */}
      <Atom.Flex
        sx={{
          flex: 1,
          alignItems: "center",
          alignContent: "flex-end",
          justifyContent: "flex-end",
          mt: 2
        }}
      >
        <Atom.Span>
          <strong>Balance: {balance} </strong>
        </Atom.Span>
      </Atom.Flex>

      {/* Bottom : Region */}
      <Atom.Flex
        sx={{
          flex: 1,
          alignItems: "flex-end",
          alignContent: "flex-end",
          justifyContent: "flex-end",
          mt: 2
        }}
      >
        <Atom.Span>
          <strong>Horizin Bank </strong>
        </Atom.Span>
      </Atom.Flex>
    </Atom.Flex>
  );
};

TokenATMCard.defaultProps = {
  icon: "https://ethereum.org/assets/img/eth-diamond-glyph.a6239151.png",
  name: "Ethereum",
  symbol: "ETH",
  sxCard: {
    bg: "blue",
    borderRadius: 20,
    boxShadow: 0,
    minHeight: 190,
    p: [2, 2, 3],
    width: [340],
    "&:hover": {
      boxShadow: 1
    }
  },
  sxIcon: {
    height: "auto",
    width: ["100%"]
  },
  sxIconWrapper: {
    bg: "white",
    borderRadius: 99999,
    p: 2,
    height: [30],
    width: [30]
  }
};
