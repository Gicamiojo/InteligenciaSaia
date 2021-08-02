
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/index.';


const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/Home" exact />
    
    </Switch>
  );
};

export default Routes