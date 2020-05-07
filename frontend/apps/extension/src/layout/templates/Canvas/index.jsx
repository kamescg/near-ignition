/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { RegionTopCanvas, RegionFooterCanvas } from '@regions';
import { useLocation } from '@reach/router';

const SiteTemplate = ({ sx, sxMain, styled, children, ...props }) => {
  const loc = useLocation();
  return (
    <Atom.Flex
      between
      sx={{ gradient: 'gray', variant: 'regions.canvas.container' }}
    >
      <RegionTopCanvas sx={{ variant: 'regions.canvas.header' }} />
      <Atom.Flex center column sx={{ variant: 'regions.canvas.main' }}>
        {children}
      </Atom.Flex>
      <RegionFooterCanvas sx={{ variant: 'regions.canvas.footer' }} />
    </Atom.Flex>
  );
};

export default SiteTemplate;
