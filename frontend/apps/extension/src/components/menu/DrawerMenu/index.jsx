/* --- Global --- */
import idx from 'idx';
import {useState} from 'react';
import {Drawer} from '@blueprintjs/core';
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import MenuAside from './menus';

/* --- Component --- */
const PraiseCreateDrawer = ({componentActivate, ...props}) => {
  const [isOpen, setOpenStatus] = useState(false);
  const toggleDrawer = () => setOpenStatus(!isOpen);

  return (
    <>
      <Atom.Box>
        <Atom.Span onClick={toggleDrawer}>
          <Atom.Span pointer sx={{variant: 'variants.cardSmall'}}>
            <Atom.Image
              src="https://image.flaticon.com/icons/svg/1828/1828859.svg"
              sx={{width: 18}}
            />
          </Atom.Span>
          {componentActivate ? Component(componentActivate) : null}
        </Atom.Span>
      </Atom.Box>
      <Drawer
        title="Give Praise"
        icon="crown"
        isOpen={isOpen}
        onClose={toggleDrawer}
        size={420}
        position={{right: 0}}>
        <Atom.Box sx={{p: 3}}>
          <MenuAside />
        </Atom.Box>
      </Drawer>
    </>
  );
};

export default PraiseCreateDrawer;
