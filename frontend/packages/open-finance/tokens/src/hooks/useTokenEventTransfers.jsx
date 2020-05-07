/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks } from "@ethers-react/system";

/* --- Effect --- */
export const useTokenEventTransfers = (selector) => {
  const eventName = "Transfer";
  const topic = "Transfer(address,address,uint256)";
  /* --- State --- */
  const [dispatch, setDispatched] = useState(false);
  const [loading, setLoading] = useState(true);
  const events = hooks.useGetEvents(selector);

  /* --- Effects --- */
  useEffect(() => {
    if (
      events.contractSelector.contract &&
      events.contractSelector.contract.address &&
      !dispatch
    ) {
      console.log(events.contractSelector.contract.address);
      events.getEvents({
        address: events.contractSelector.contract.address,
        topic,
        eventName: eventName,
      });
      setDispatched(true);
    }
  }, [events.contractSelector]);

  useEffect(() => {
    console.log(events, "events");
    if (events.events && loading) setLoading(false);
  }, [events]);

  return {
    loading: loading,
    events: events.events,
  };
};
