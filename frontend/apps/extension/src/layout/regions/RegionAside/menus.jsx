/* --- Settings --- */
const styleMenuItem = {
  fontSize: 1,
  my: 1,
  flexDirection: 'column',
};
const styleMenuItemHover = {
  color: 'white',
  opacity: 1,
  transform: 'scale(1.025)',
};
const styleMenuItemChildren = {
  fontSize: 1,
  my: 1,
  flexDirection: 'column',
};

/* --- MenuAside : Component --- */
const MenuAside = props => {
  return (
    <>
      <Molecule.Menu
        direction="column"
        label="Dashboard"
        sx={styleMenuItem}
        hover={styleMenuItemHover}
        sxChildren={styleMenuItemChildren}
        sxChild={{transition: 'all 0.2s'}}
        labelUnderline
        items={[
          {
            label: 'Portfolio',
            to: '/insights/',
          },
          {
            label: 'Invest',
            to: '/insights/invest',
          },
          {
            label: 'Opportunity',
            to: '/insights/opportunity',
          },
        ]}
      />
      <Atom.HorizontalRule
        sx={{
          my: 3,
          opacity: 0,
        }}
      />
    </>
  );
};
export default MenuAside;
