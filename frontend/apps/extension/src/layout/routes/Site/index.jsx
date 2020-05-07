/* --- Global --- */
import React from 'react';
import { Router, useNavigate } from '@reach/router';

/* --- Local --- */
import { Canvas } from '@templates';

import { Home } from '@screens';
/* --- Component --- */
const IndexPage = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/');
  }, []);
  return (
    <Canvas>
      <Router primary={false} style={{ height: '100%', width: '100%' }}>
        <Home path="/" />
      </Router>
    </Canvas>
  );
};

export default IndexPage;
