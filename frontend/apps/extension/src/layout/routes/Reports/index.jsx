/* --- Global --- */
import React from 'react';
import {Router} from '@reach/router';

/* --- Local --- */
import {Canvas} from '@templates';

import {AdvancedRegistration} from '@screens';
/* --- Component --- */
const IndexPage = () => (
  <Canvas>
    <Router primary={false} style={{height: '100%', width: '100%'}}>
      <AdvancedRegistration path="/" />
    </Router>
  </Canvas>
);

export default IndexPage;
