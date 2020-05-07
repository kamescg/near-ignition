import { withThreeBox } from "3box-system";
import { generateImageUrlFromHash } from "../lib/helpers";
/**
 * @name ProfilePreview
 * @param {Object} props
 */
export const ProfilePreview = ({
  sx,
  sxName,
  sxImage,
  sxImageWrapper,
  ...props
}) => {
  const box = withThreeBox();

  return !box.profile ? null : (
    <Atom.Flex center column sx={sx}>
      <Atom.Span sx={sxImageWrapper}>
        <Atom.Image
          src={generateImageUrlFromHash(box.profile.image)}
          variants={["effects.avatars"]}
          sx={{ width: 32, ...sxImage }}
        />
      </Atom.Span>
      <Atom.Heading sx={sxName}>{box.profile.name}</Atom.Heading>
    </Atom.Flex>
  );
};
