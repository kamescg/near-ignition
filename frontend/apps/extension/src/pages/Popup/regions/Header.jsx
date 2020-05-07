/* --- Global --- */

/* --- Local --- */
import ProfileMenu from '../views/ProfileMenu';
import Logo from '@assets/img/icon-128.png';
/**
 * @name RegionHeader
 * @param {Object} props
 */
const RegionHeader = (props) => {
  return (
    <Atom.Flex alignCenter sx={{ width: '100%' }}>
      {/* Left  Region */}
      <Atom.Flex alignCenter sx={{ flex: 1 }}>
        <Atom.Image src={Logo} sx={{ width: 24 }} />
        <Atom.Span sx={{ fontSize: [2, 2, 3] }}>ignition</Atom.Span>
      </Atom.Flex>
      {/* Center  Region */}
      <Atom.Box sx={{ flex: 3, textAlign: 'center' }}>Select Network</Atom.Box>
      {/* Right  Region */}
      <Atom.Box sx={{ flex: 1, textAlign: 'right' }}>
        <ProfileMenu />
      </Atom.Box>
    </Atom.Flex>
  );
};
export default RegionHeader;
