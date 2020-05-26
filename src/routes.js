import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Repositories from "./Repositories";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
