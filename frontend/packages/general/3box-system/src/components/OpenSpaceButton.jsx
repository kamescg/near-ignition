/* --- Global --- */
import { hooks } from "3box-system";

/**
 *@name OpenSpaceButton
 * @param props
 */
export const OpenSpaceButton = ({ space, label, sx, ...props }) => {
  const spaceHook = hooks.useOpenSpace(space);
  return (
    <Atom.Button onClick={spaceHook.openBox} sx={sx} {...props}>
      {label}
    </Atom.Button>
  );
};

OpenSpaceButton.defaultProps = {
  label: "Open Space",
};
