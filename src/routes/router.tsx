import React from "react";

import { Route, Switch } from "react-router-dom";
import WelcomePage from "../components/page/WelcomePage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact components={WelcomePage} />
      </Switch>
    );
  }
}

export default Routes;
