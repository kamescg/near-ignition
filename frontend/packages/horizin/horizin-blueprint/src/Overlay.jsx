import React, {useState} from 'react';
import {Overlay as OverlayBlueprint} from '@blueprintjs/core';
export const Overlay = ({children, ...props}) => {
  const [isOpen, setIsOpen] = useState();
  const toggleOverlay = () => setIsOpen(!isOpen);

  return (
    <>
      <span text="Show overlay" onClick={toggleOverlay}>
        {children[0]}
      </span>
      <OverlayBlueprint
        isOpen={isOpen}
        onClose={toggleOverlay}
        className={'overlay'}>
        {children && children[1] ? children[1] : null}
      </OverlayBlueprint>
    </>
  );
};
