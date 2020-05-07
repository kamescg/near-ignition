/* --- Global --- */
import { Icon } from '@blueprintjs/core';

/* --- Local --- */
import { FormSettings } from '@forms';
/* --- Component --- */
const DashboardOverview = (props) => {
  return (
    <Atom.Box>
      <RegionHeader />
      <RegionMain />
    </Atom.Box>
  );
};

const RegionHeader = (props) => {
  return (
    <Atom.Flex
      alignCenter
      between
      gradient="amin"
      direction={140}
      sx={{
        bg: 'blue',
        color: 'white',
        boxShadow: 1,
        py: 3,
        px: 3,
      }}
    ></Atom.Flex>
  );
};

const RegionMain = (props) => {
  return (
    <Atom.Flex column>
      <FormSettings />
    </Atom.Flex>
  );
};

export default DashboardOverview;
