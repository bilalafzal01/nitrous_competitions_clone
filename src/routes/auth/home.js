import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = lazy(() => import("../../containers/HomePage"));

const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={HomePage} />
    </Switch>
  );
};

export default DashboardRoutes;
