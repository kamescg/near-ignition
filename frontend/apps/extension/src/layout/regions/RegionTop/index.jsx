/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Local --- */
import { ColorMode } from '@components';
import { ProviderSelect } from '@ethers-react/ui';
export default ({ sx }) => (
  <Atom.Flex alignCenter between sx={sx}>
    {/* Left */}
    <Atom.Heading
      heavy
      as="h2"
      sx={{
        fontSize: [1, 1, 2],
        m: 0,
      }}
    ></Atom.Heading>

    <Atom.Flex alignCenter ml={4}>
      <Molecule.Menu
        sx={{
          fontSize: [1],
          m: 1,
          mx: 2,
        }}
        items={[
          {
            label: 'Invest',
            to: '/dashboard/invest',
          },
        ]}
      />
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/auth/">
        <Atom.Span tag sm>
          Login/Register
        </Atom.Span>
      </Molecule.Link>
      <ProviderSelect />
    </Atom.Flex>
  </Atom.Flex>
);
