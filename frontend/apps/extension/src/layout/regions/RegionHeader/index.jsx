/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Local --- */
import {ColorMode} from '@components';

export default ({sx}) => (
  <Atom.Flex alignCenter between sx={sx}>
    {/* Left */}
    <Atom.Heading
      heavy
      as="h2"
      sx={{
        fontSize: [1, 1, 2],
        m: 0,
      }}>
      <Atom.Span normal sx={{color: 'blue'}}>
        <Molecule.Link to="/">{GLOBAL.siteName}</Molecule.Link>
      </Atom.Span>
    </Atom.Heading>

    <Atom.Flex alignCenter ml={4}>
      <Molecule.Menu
        sx={{
          m: 2,
          mx: 2,
        }}
        items={[
          {
            label: 'Features',
            to: '/features',
          },
          {
            label: 'Pricing',
            to: '/pricing',
          },
          {
            label: 'Support',
            to: '/support',
          },
        ]}
      />
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/dashboard/" sx={{mr: 2}}>
        <Atom.Span sm>Dashboard</Atom.Span>
      </Molecule.Link>
      <Molecule.Link to="/auth/">
        <Atom.Span tag sm>
          Login/Register
        </Atom.Span>
      </Molecule.Link>
      {/* <ColorMode /> */}
    </Atom.Flex>
  </Atom.Flex>
);
