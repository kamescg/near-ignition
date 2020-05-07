/* --- Global --- */
import { useEffect, useState } from "react";
import { withThreeBox, cache } from "3box-system";
import * as Box from "3box";

/* --- Effect --- */
export const useGetSpaces = () => {
  const box = withThreeBox();
  const [spaces, setSpaces] = useState(undefined);

  /* --- Block Mind : Listen Event --- */
  useEffect(() => {
    cache
      .getItem("spaces")
      .then((spaces) => {
        setSpaces(spaces);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (box.account) {
      (async () => {
        const spaces = await Box.listSpaces(box.address);
        cache.setItem("spaces", spaces);
        setSpaces(spaces);
      })();
    }
  }, [box.account]);

  return spaces;
};
