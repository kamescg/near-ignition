/* --- Global --- */
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withEthers, helpers } from "@ethers-react/system";
import { Flex } from "@horizin/atoms";
import { Toast } from "@horizin/blueprint-system";
import { Blockie } from "../index";

import IconCopy from "../assets/icon-copy.svg";
import IconExternalLink from "../assets/icon-external-link.svg";
/* ---  Address : Component --- */
export const AccountAddress = ({
  address,
  attr,
  blockie,
  copy,
  external,
  sx,
  sxAddress,
  trim,
}) => {
  const ethersProvider = withEthers();
  return (
    <Flex alignCenter sx={sx} {...attr}>
      {blockie && <Blockie seed={address} sx={{}} scale={3} sxBlockie={{}} />}
      <Atom.Span sx={sxAddress}>
        {address
          ? trim
            ? helpers.shortenAddress(address, trim)
            : address
          : "0x..."}
      </Atom.Span>
      {copy && (
        <CopyToClipboard text={address}>
          <Atom.Span>
            <Toast msg="Address Copied" pointer sx={{ ml: 2 }}>
              <Atom.Span
                sx={{
                  bg: "smoke",
                  borderRadius: 9999,
                  cursor: "pointer",
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
              </Atom.Span>
            </Toast>
          </Atom.Span>
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
              cursor: "pointer",
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
