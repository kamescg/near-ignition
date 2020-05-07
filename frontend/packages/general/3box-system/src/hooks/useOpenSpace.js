/* --- Global --- */
import { useEffect, useState } from "react";
import { withThreeBox } from "3box-system";
import * as Box from "3box";

/**
 * @name useOpenSpace
 * @param {String} spaceSelector
 */
export const useOpenSpace = (spaceSelector) => {
  const box = withThreeBox();
  const [open, triggerOpen] = useState(false);
  const [space, setSpace] = useState(undefined);

  const openBox = () => {
    triggerOpen(true);
  };

  /* --- Open Space Cache : Listen Event --- */
  useEffect(() => {
    if (open && box.account) {
      (async () => {
        const space = await box.account.openSpace(spaceSelector);
        setSpace(space);
      })();
    }
  }, [box.account, open]);

  return {
    openBox,
    triggerOpen,
    space,
  };
};
