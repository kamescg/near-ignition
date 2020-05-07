import React, { useState } from "react";
import { Overlay as OverlayBlueprint } from "@blueprintjs/core";
/**
 *
 * @param {*} param0
 */
export const Modal = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState();
  const toggleOverlay = () => setIsOpen(!isOpen);

  console.log(isOpen, "isOpenisOpen");

  return (
    <>
      <span text="Show overlay" onClick={() => toggleOverlay(!isOpen)}>
        {children[0]}
      </span>
      <OverlayBlueprint
        isOpen={isOpen}
        onClose={toggleOverlay}
        className={"overlay"}
      >
        {children && children[1] ? children[1] : null}
      </OverlayBlueprint>
    </>
  );
};
