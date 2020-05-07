/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {DashboardOverview} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router primary={false} style={{height: '100%', width: '100%'}}>
      <DashboardOverview path="/" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
