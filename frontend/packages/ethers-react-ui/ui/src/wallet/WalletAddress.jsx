/* --- Global --- */
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withEthers, helpers } from "@ethers-react/system";
import { Flex } from "@horizin/atoms";
import { Toast } from "@horizin/blueprint-system";

/* --- Local --- */
import { Blockie } from "../index";
import IconCopy from "../assets/icon-copy.svg";
import IconExternalLink from "../assets/icon-external-link.svg";

/* ---  WalletAddress : Component --- */
export const WalletAddress = ({
  attr,
  blockie,
  copy,
  external = true,
  sx,
  sxAddress,
  trim,
}) => {
  const ethersProvider = withEthers();
  return (
    <Flex alignCenter sx={sx} {...attr}>
      {blockie && (
        <Blockie
          seed={ethersProvider.address}
          sx={{}}
          scale={3}
          sxBlockie={{}}
        />
      )}
      <Atom.Span sx={sxAddress}>
        {ethersProvider.address
          ? trim
            ? helpers.shortenAddress(ethersProvider.address, trim)
            : ethersProvider.address
          : "0x..."}
      </Atom.Span>
      {copy && (
        <CopyToClipboard text={ethersProvider.address}>
          <Atom.Flex>
            <Toast msg="Address Copied" pointer sx={{ ml: 2 }}>
              <Atom.Flex
                center
                column
                sx={{
                  bg: "smoke",
                  borderRadius: 9999,
                  mx: 1,
                  p: 1,
                  height: 26,
                  width: 26,
                  "&:hover": {
                    bg: "gray",
                  },
                }}
              >
                <Atom.Image src={IconCopy} sx={{ width: 16 }} />
              </Atom.Flex>
            </Toast>
          </Atom.Flex>
        </CopyToClipboard>
      )}
      {external && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://${
            ethersProvider.network &&
            ethersProvider.network.name === "homestead"
              ? ""
              : `${ethersProvider.network && ethersProvider.network.name}.`
          }etherscan.io/address/${ethersProvider.address}`}
        >
          <Atom.Flex
            center
            column
            sx={{
              bg: "smoke",
              mx: 1,
              borderRadius: 9999,
              height: 26,
              width: 26,
              p: 1,
              "&:hover": {
                bg: "gray",
              },
            }}
          >
            <Atom.Image src={IconExternalLink} sx={{ width: 16 }} />
          </Atom.Flex>
        </a>
      )}
    </Flex>
  );
};
