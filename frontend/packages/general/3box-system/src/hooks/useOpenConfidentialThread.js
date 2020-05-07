/* --- Global --- */
import { useEffect, useState } from "react";
import { withThreeBox } from "3box-system";

/**
 * @name useOpenConfidentialThread
 * @param {String} spaceSelector
 */
export const useOpenConfidentialThread = (spaceSelector, threadName) => {
  const box = withThreeBox();
  const [open, triggerOpen] = useState(false);
  const [thread, setThread] = useState(undefined);

  const openThread = () => {
    triggerOpen(true);
  };

  /* --- Open Space Cache : Listen Event --- */
  useEffect(() => {
    if (open && box.account) {
      (async () => {
        const space = await box.account.openSpace(spaceSelector);
        console.log(space, threadName, "space horizin");
        // const thread = await space.createConfidentialThread(threadName);
        const thread = await space.joinThread(threadName, {
          ghost: false,
          ghostBacklogLimit: 20, // optional and defaults to 50
        });
        setThread(thread);
      })();
    }
  }, [box.account, open]);

  return {
    openThread,
    triggerOpen,
    thread,
  };
};
