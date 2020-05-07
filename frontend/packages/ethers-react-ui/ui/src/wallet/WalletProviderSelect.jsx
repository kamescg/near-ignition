/* --- Global --- */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withEthers } from "@ethers-react/system";
import { WalletAddress } from "@ethers-react/ui";
import { Span } from "@horizin/atoms";
import { Component } from "@horizin/ui-compose";

/* ---  Component --- */
export const WalletProviderSelect = (props) => {
  const ethers = withEthers();

  const [disconnectedPassedProps, setDisconnectedPassedProps] = useState({
    ...props.disconnectedProps,
    label: props.disconnectedLabel,
  });
  const [waitingPassedProps, setWaitingPassedProps] = useState({
    ...props.waitingProps,
    label: props.loadingLabel,
  });

  useEffect(() => {
    setDisconnectedPassedProps({
      ...disconnectedPassedProps,
      onClick: () => ethers.providerSelect(),
    });
  }, [ethers.providerSelect]);

  return (
    <>
      {/* Disconnected : Status */}
      {!ethers.isSelectedProviderRequested &&
        !ethers.isSelectedProviderSuccess &&
        Component(props.componentIsDisconnected, disconnectedPassedProps)}
      {/* Requested : Status */}
      {ethers.isSelectedProviderRequested &&
        !ethers.isSelectedProviderSuccess &&
        Component(props.componentIsDisconnected, waitingPassedProps)}
      {/* Enabled : Status */}
      {!ethers.isSelectedProviderRequested &&
        ethers.isSelectedProviderSuccess && (
          <>{Component(props.componentIsEnabled, props.connectedProps)}</>
        )}
    </>
  );
};

/* ---  Sub-Component --- */
const Tag = ({ attr, label, ...props }) => (
  <Span {...attr} {...props}>
    {label}
  </Span>
);

const AddressTag = (props) => {
  return <WalletAddress {...props} />;
};

/* ---  Configuration --- */
WalletProviderSelect.defaultProps = {
  disconnectedLabel: "Select Provider",
  loadingLabel: "Loading",
  connectedLabel: "Enabled",
  componentIsEnabled: AddressTag,
  componentIsDisconnected: Tag,
  componentIsLoading: Tag,
  componentIsConnected: <Tag />,
  disconnectedProps: {
    attr: {
      pointer: true,
      tag: true,
    },
  },
  waitingProps: {
    attr: {
      pointer: true,
      tag: true,
    },
  },
  connectedProps: {
    trim: 6,
    blockie: true,
    copy: true,
    external: true,
    sxAddress: {
      mx: 2,
    },
    attr: {
      // pointer: true,
      // tag: true
    },
  },
};

WalletProviderSelect.propTypes = {
  disconnectedLabel: PropTypes.string,
  loadingLabel: PropTypes.string,
  connectedLabel: PropTypes.string,
  sxDisconnected: PropTypes.object,
  sxLoading: PropTypes.object,
  sxConnected: PropTypes.object,
  componentIsDisconnected: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]),
  componentIsLoading: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]),
  componentIsEnabled: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
