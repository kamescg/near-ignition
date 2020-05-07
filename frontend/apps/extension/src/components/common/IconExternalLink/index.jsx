import ExternalLink from '@assets/images/icons/icon-external-link-96.png';

/**
 * @name IconExternalLink
 * @param {*} props
 */
const IconExternalLink = ({link, sx}) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <Atom.Image src={ExternalLink} sx={{width: 22, ...sx}} />
    </a>
  );
};
export default IconExternalLink;
