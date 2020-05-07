/* --- Settings --- */
const styleMenuItem = {
  fontSize: 1,
  my: 1,
  flexDirection: 'column',
};
const styleMenuItemHover = {
  color: 'blue',
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
            label: 'Activity',
            to: '/insights/',
          },
          {
            label: 'Search',
            to: '/insights/search',
          },
          {
            label: 'People',
            to: '/insights/people',
          },
        ]}
      />

      <Molecule.Menu
        direction="column"
        label="Github"
        sx={styleMenuItem}
        hover={styleMenuItemHover}
        sxChildren={styleMenuItemChildren}
        sxChild={{transition: 'all 0.2s'}}
        labelUnderline
        items={[
          {
            label: 'Users',
            to: '/insights/github/users',
          },
          {
            label: 'Activity',
            to: '/insights/github/activity',
          },
          {
            label: 'Repos',
            to: '/insights/github/repos',
          },
          {
            label: 'Organizations',
            to: '/insights/github/organizations',
          },
        ]}
      />
      <Atom.HorizontalRule
        sx={{
          my: 3,
          opacity: 0,
        }}
      />
      {/* <Molecule.Menu
        direction="column"
        label="Twitter"
        sx={styleMenuItem}
        hover={styleMenuItemHover}
        sxChildren={styleMenuItemChildren}
        sxChild={{transition: 'all 0.2s'}}
        sxMenu={{mt: 3}}
        labelUnderline
        items={[
          {
            label: 'Tweets',
            to: '/insights/twitter/tweets',
          },
          {
            label: 'Hashtags',
            to: '/insights/twitter/hashtags',
          },
        ]}
      /> */}
    </>
  );
};
export default MenuAside;
