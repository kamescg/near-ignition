import {RegionAside, RegionTop, RegionFooter} from '@regions';
// import styles from './styles';

const DashboardTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex column sx={{variant: 'regions.dashboard.container'}}>
      <Atom.Flex sx={{flex: 1}}>
        <RegionAside sx={{variant: 'regions.dashboard.aside'}} />
        <Atom.Flex column sx={{variant: 'regions.dashboard.main'}}>
          <RegionTop sx={{variant: 'regions.dashboard.top'}} />
          <Atom.Flex column sx={{flex: 1, ...sxMain}}>
            {children}
          </Atom.Flex>
          {/* <RegionFooter sx={{variant: 'regions.dashboard.footer'}} /> */}
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default DashboardTemplate;
