import {RegionHeader, RegionFooter} from '@regions';

const SiteTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex column sx={{variant: 'regions.site.container'}}>
      <RegionHeader sx={{variant: 'regions.site.header'}} />
      <Atom.Flex sx={{flex: 1, variant: 'main'}}>{children}</Atom.Flex>
      <RegionFooter sx={{variant: 'regions.site.footer'}} />
    </Atom.Flex>
  );
};

export default SiteTemplate;
