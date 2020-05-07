/* --- Global --- */
import { hooks } from "3box-system";

/**
 *@name OpenGhostThreadButton
 * @param props
 */
export const OpenGhostThreadButton = ({
  space,
  thread,
  label,
  sx,
  ...props
}) => {
  const spaceHook = hooks.useOpenConfidentialThread(space, thread);
  return (
    <Atom.Button onClick={spaceHook.openThread} sx={sx} {...props}>
      {label}
    </Atom.Button>
  );
};

OpenGhostThreadButton.defaultProps = {
  label: "Open Ghost Thread",
};
