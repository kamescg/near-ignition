/**
 * @name RegionAside
 * @description Aside region for the Dashboard template.
 */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex column sx={sx}>
      <Atom.Flex center column sx={{bg: 'blue', color: 'white', p: 3}}>
        <Atom.Box>
          <Molecule.Link to="/">
            <Atom.Heading lg heavy sx={{mb: 0}}>
              {GLOBAL.siteName}
            </Atom.Heading>
          </Molecule.Link>
        </Atom.Box>
      </Atom.Flex>
      <Atom.Box
        variants={['backgrounds.gradients.cloudy', 'effects.shadowHover']}
        sx={{p: 3}}>
        <Molecule.Link to="/dashboard/settings">
          <Atom.Span sm>Settings</Atom.Span>
        </Molecule.Link>
      </Atom.Box>
      <Molecule.Menu
        items={menu}
        direction="column"
        sxMenu={{
          p: 2,
        }}
        sx={{
          fontSize: 2,
          my: 1,
          flexDirection: 'column',
        }}
      />
    </Atom.Flex>
  );
};

const menu = [
  {
    label: 'Overview',
    to: '/dashboard',
  },
];

export default RegionAside;
