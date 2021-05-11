import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const AboutPage = lazy(() => import("../../containers/AboutPage"));

const AbourRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AboutPage} />
    </Switch>
  );
};

export default AbourRoutes;
